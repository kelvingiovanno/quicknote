const Profile = () => {
  return (
    <div className="min-w-52 flex justify-start items-center gap-3 h-full ">
      <img
        src="https://i.pravatar.cc/150?img=12"
        alt="profile"
        className="w-10 h-10 rounded-full object-cover"
      />
      <div className="flex flex-col leading-tight">
        <p className="font-semibold text-sm">Kelvin Giovanno</p>
        <p className="text-xs text-gray-500">kelvingiovanno@gmail.com</p>
      </div>
    </div>
  );
};

export default Profile;