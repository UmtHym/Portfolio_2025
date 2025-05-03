// components/ProfileBio.tsx
const ProfileBio = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="group relative h-[250px] w-[250px] overflow-hidden rounded-full border-4 border-primary/80 shadow-lg transition-all hover:border-primary">
        <img
          className="h-full w-full rounded-full object-cover transition-transform duration-500 group-hover:scale-105"
          src="src/assets/images/1681908246814.jpeg"
          alt="Umit Hayim profile photo"
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent to-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      </div>
      <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 dark:from-primary-foreground dark:to-primary-foreground/70">
        Umit Hayim
      </h1>
      <h2 className="text-xl font-medium text-primary dark:text-primary-foreground">
        Software Engineer
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 max-w-[90%]">
        Full-stack developer specializing in React and Node.js development.
      </p>
    </div>
  );
};

export default ProfileBio;
