// components/ProfileBio.tsx
const ProfileBio = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="h-[250px] w-[250px] overflow-hidden rounded-full">
        {/* Image */}
      </div>
      <h1 className="text-3xl font-semibold">Your Name</h1>
      <p className="text-gray-600 dark:text-gray-300 text-center">
        Your bio here
      </p>
    </div>
  );
};
export default ProfileBio;
