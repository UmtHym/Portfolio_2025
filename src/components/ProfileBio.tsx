// components/ProfileBio.tsx
const ProfileBio = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="group relative h-[250px] w-[250px] overflow-hidden rounded-full border-2 border-primary/80 shadow-lg transition-all hover:border-primary">
        <img
          className="h-full w-full rounded-full object-cover transition-transform duration-500 group-hover:scale-105"
          src="/images/1681908246814.jpeg"
          alt="Umit Hayim profile photo"
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent to-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      </div>
      <div className="flex flex-col items-center text-center">
        <h1 className="text-3xl font-bold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Umit Hayim
          </span>
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          🟢 Available for projects
        </p>
      </div>
    </div>
  );
};

export default ProfileBio;
