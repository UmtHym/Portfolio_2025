import { useState, useEffect } from "react";
import { GitCommit, Code2, Loader } from "lucide-react";

interface GitHubEvent {
  id: string;
  type: string;
  repo: {
    name: string;
  };
  payload: {
    commits?: Array<{
      message: string;
    }>;
    ref?: string;
    pull_request?: {
      title: string;
    };
  };
  created_at: string;
}

interface ActivityItem {
  id: string;
  type: "commit" | "project" | "learning";
  title: string;
  description: string;
  timestamp?: string;
  link?: string;
}

const LatestActivities = () => {
  const [activities, setActivities] = useState<ActivityItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Manual activities - update these as needed
  const manualActivities: ActivityItem[] = [
    {
      id: "current-project",
      type: "project",
      title: "Building Portfolio Website",
      description: "React, TypeScript, Tailwind CSS",
    },
    // Add more manual activities as needed
  ];

  useEffect(() => {
    const fetchGitHubActivity = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/UmtHym/events/public"
        );
        if (!response.ok) throw new Error("Failed to fetch");

        const data: GitHubEvent[] = await response.json();

        // Filter and transform GitHub events
        const githubActivities: ActivityItem[] = data
          .filter(
            (event) =>
              event.type === "PushEvent" || event.type === "PullRequestEvent"
          )
          .slice(0, 3) // Get only the latest 3 events
          .map((event) => {
            let title = "";
            let description = "";

            if (event.type === "PushEvent" && event.payload.commits?.length) {
              title = `Pushed to ${event.repo.name.split("/")[1]}`;
              description = event.payload.commits[0].message.split("\n")[0]; // First line of commit message
            } else if (
              event.type === "PullRequestEvent" &&
              event.payload.pull_request
            ) {
              title = `PR in ${event.repo.name.split("/")[1]}`;
              description = event.payload.pull_request.title;
            }

            return {
              id: event.id,
              type: "commit" as const,
              title,
              description:
                description.length > 50
                  ? description.substring(0, 47) + "..."
                  : description,
              timestamp: new Date(event.created_at).toLocaleDateString(),
              link: `https://github.com/${event.repo.name}`,
            };
          })
          .filter((activity) => activity.title); // Remove any empty activities

        // Combine manual and GitHub activities
        setActivities([...manualActivities, ...githubActivities]);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching GitHub activity:", err);
        setError(true);
        setLoading(false);
        // Fall back to just manual activities
        setActivities(manualActivities);
      }
    };

    fetchGitHubActivity();
  }, []);

  const getActivityIcon = (type: ActivityItem["type"]) => {
    switch (type) {
      case "commit":
        return <GitCommit size={14} className="text-primary" />;
      case "project":
        return <Code2 size={14} className="text-chart-1" />;
      default:
        return <Code2 size={14} className="text-muted-foreground" />;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <Loader className="animate-spin text-primary" size={20} />
      </div>
    );
  }

  return (
    <div className="w-full px-4">
      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
        Latest Activities
      </h3>

      <div className="space-y-2">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="group flex items-start gap-2 p-2 rounded-lg hover:bg-secondary/50 transition-colors"
          >
            <div className="mt-0.5 flex-shrink-0">
              {getActivityIcon(activity.type)}
            </div>
            <div className="flex-1 overflow-hidden">
              <h4 className="text-sm font-medium leading-tight">
                {activity.link ? (
                  <a
                    href={activity.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors block truncate"
                  >
                    {activity.title}
                  </a>
                ) : (
                  <span className="block truncate">{activity.title}</span>
                )}
              </h4>
              <p className="text-xs text-muted-foreground truncate mt-0.5">
                {activity.description}
              </p>
              {activity.timestamp && (
                <p className="text-xs text-muted-foreground/70 mt-1">
                  {activity.timestamp}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {error && activities.length === manualActivities.length && (
        <p className="text-xs text-muted-foreground text-center mt-4">
          GitHub activity unavailable
        </p>
      )}
    </div>
  );
};

export default LatestActivities;
