// components/ProfileBio.tsx
const ProfileBio = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="h-[250px] w-[250px] overflow-hidden rounded-full">
        <img
          className="rounded-full"
          src="src/assets/images/1681908246814.jpeg"
          alt="Bio image"
        />
      </div>
      <h1 className="text-3xl font-semibold">Umit Hayim</h1>
      <p className="text-gray-600 dark:text-gray-300 text-wrap">
        I am a Software Developer based in Barcelona, Spain. I am proficient in
        both Frontend development and Backend development. My main stack is MERN
        but Typescript and Nextjs are my go-to if it's a large project. I have a
        variety of different business experiences including advertising,
        marketing, and exporting manager. Acknowledging and retaining the
        creative, consistent, and managerial skills of my previous endeavors, As
        a software engineer, I aspire to help bring creative projects to life
        and demonstrate my commitment to developing world-class software
        solutions.
      </p>
    </div>
  );
};
export default ProfileBio;
