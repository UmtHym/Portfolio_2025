import { useEffect, useState } from "react";
import { Download, Terminal, Code, BookOpen } from "lucide-react";

function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  // Animate in on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="tab-content relative flex h-full w-full flex-col overflow-auto py-8">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        {/* Main Title with gradient styling */}
        <div
          className={`mb-12 text-center opacity-0 transform translate-y-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : ""
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-chart-1 bg-clip-text text-transparent">
              Hello, I'm Umit
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A software developer based in Barcelona, specializing in building
            exceptional digital experiences.
          </p>
        </div>

        {/* Cards with staggered animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Who I Am Card */}
          <div
            className={`group rounded-xl border border-border bg-background/70 backdrop-blur-sm p-6 shadow-lg hover:shadow-xl transition-all duration-500 opacity-0 transform translate-y-8 ${
              isVisible ? "opacity-100 translate-y-0" : ""
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="mb-4 flex items-center gap-2">
              <div className="h-8 w-1 bg-gradient-to-b from-primary to-chart-1 rounded-full"></div>
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <User size={18} className="text-primary" />
                Who I Am
              </h3>
            </div>
            <p className="mb-4">
              I'm a Full-stack developer with expertise in React and Node.js. My
              toolkit includes TypeScript, Next.js, and MongoDB for building
              responsive and scalable web applications.
            </p>
            <p>
              I bring a diverse international perspective to my work and
              projects, having experienced different cultures and work
              environments.
            </p>
          </div>

          {/* Technical Focus Card */}
          <div
            className={`group rounded-xl border border-border bg-background/70 backdrop-blur-sm p-6 shadow-lg hover:shadow-xl transition-all duration-500 opacity-0 transform translate-y-8 ${
              isVisible ? "opacity-100 translate-y-0" : ""
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <div className="mb-4 flex items-center gap-2">
              <div className="h-8 w-1 bg-gradient-to-b from-primary to-chart-1 rounded-full"></div>
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Code size={18} className="text-primary" />
                Technical Focus
              </h3>
            </div>
            <p className="mb-4">
              My primary focus is creating seamless user experiences with clean,
              efficient code. I'm passionate about responsive design and
              performance optimization.
            </p>
            <p>
              Currently exploring more advanced React patterns and the
              intersection of design and development to create more intuitive
              interfaces.
            </p>
          </div>

          {/* Professional Experience Card */}
          <div
            className={`group rounded-xl border border-border bg-background/70 backdrop-blur-sm p-6 shadow-lg hover:shadow-xl transition-all duration-500 opacity-0 transform translate-y-8 md:col-span-2 ${
              isVisible ? "opacity-100 translate-y-0" : ""
            }`}
            style={{ transitionDelay: "700ms" }}
          >
            <div className="mb-4 flex items-center gap-2">
              <div className="h-8 w-1 bg-gradient-to-b from-primary to-chart-1 rounded-full"></div>
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <BookOpen size={18} className="text-primary" />
                Professional Philosophy
              </h3>
            </div>
            <p className="mb-4">
              I believe great software is born at the intersection of technical
              excellence and user empathy. Every project I undertake is
              approached with a focus on creating clean, maintainable code that
              delivers exceptional user experiences.
            </p>
            <p>
              My background in international business has given me valuable
              insights into user needs and market dynamics that I bring to my
              software development approach, helping bridge the gap between
              business objectives and technical implementation.
            </p>
          </div>
        </div>

        {/* Journey visualization - code-inspired timeline */}
        <div
          className={`mt-12 opacity-0 transform translate-y-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : ""
          }`}
          style={{ transitionDelay: "900ms" }}
        >
          <div className="rounded-xl border border-border bg-background/70 backdrop-blur-sm p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Terminal size={18} className="text-primary" />
              My Journey
            </h3>

            <div className="relative ml-4 border-l-2 border-dashed border-primary/30 pl-8 space-y-8">
              {/* Timeline items */}
              <TimelineItem
                year="2022"
                title="Freelance Developer"
                description="Started freelancing while deepening my knowledge of full-stack development"
                delay={1100}
                isVisible={isVisible}
              />

              <TimelineItem
                year="2023"
                title="Software Engineer at 100devs"
                description="Developed multiple client projects and contributed to open source"
                delay={1300}
                isVisible={isVisible}
              />

              <TimelineItem
                year="2024"
                title="Full-Stack Developer"
                description="Specialized in React/Node.js development with focus on responsive design"
                delay={1500}
                isVisible={isVisible}
              />

              <TimelineItem
                year="2025"
                title="Present"
                description="Continuing to build innovative applications and expand my skill set"
                delay={1700}
                isVisible={isVisible}
                isCurrent
              />
            </div>
          </div>
        </div>

        {/* Resume Download with animation */}
        <div
          className={`mt-12 flex justify-center opacity-0 transform translate-y-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : ""
          }`}
          style={{ transitionDelay: "1900ms" }}
        >
          <a
            href="https://drive.google.com/file/d/1hSQzG5LGn2j7qFNAU-MqNR3ha05tRLU1/view?usp=share_link"
            download
            className="group relative flex items-center gap-3 overflow-hidden rounded-lg bg-primary px-8 py-3 text-primary-foreground shadow-lg transition-all hover:shadow-xl active:scale-95"
          >
            <span className="absolute -left-16 -top-16 h-32 w-32 translate-x-1/2 translate-y-1/2 rotate-45 bg-white/20 transition-all duration-500 group-hover:translate-y-full"></span>
            <Download className="relative h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110" />
            <span className="relative font-medium">Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
}

// Timeline item component
interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  delay: number;
  isVisible: boolean;
  isCurrent?: boolean;
}

const TimelineItem = ({
  year,
  title,
  description,
  delay,
  isVisible,
  isCurrent = false,
}: TimelineItemProps) => (
  <div
    className={`relative opacity-0 transform translate-y-4 transition-all duration-700 ${
      isVisible ? "opacity-100 translate-y-0" : ""
    }`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="absolute -left-10 flex h-5 w-5 items-center justify-center">
      <div
        className={`h-3 w-3 rounded-full ${
          isCurrent ? "bg-primary animate-pulse" : "bg-primary/70"
        }`}
      ></div>
    </div>
    <div className="flex flex-col">
      <div className="flex items-center">
        <h4 className="font-mono text-sm text-primary">{year}</h4>
        {isCurrent && (
          <span className="ml-2 inline-flex h-2 w-2 rounded-full bg-green-500 animate-ping"></span>
        )}
      </div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </div>
);

// Icon components
const User = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

export default AboutSection;
