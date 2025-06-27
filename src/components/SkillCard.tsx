interface SkillCardProps {
  name: string;
  icon: string;
  level?: number;
}

const SkillCard = ({ name, icon, level }: SkillCardProps) => {
  return (
    <div className="bg-card rounded-lg border border-primary/30 p-4 transition-all hover:shadow-md">
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 flex items-center justify-center bg-secondary/30 rounded-md p-2">
          <img
            src={icon}
            alt={name}
            className="w-full h-full object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
            }}
          />
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-base">{name}</h3>
          {level && (
            <div className="mt-2 h-1.5 w-full bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full"
                style={{ width: `${level}%` }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default SkillCard;
