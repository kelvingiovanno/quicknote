const Profile = () => {
  return (
    <div className="flex justify-start items-center gap-2 h-full ">
      <img
        src="https://i.pravatar.cc/150?img=12"
        alt="profile"
        className="w-10 h-10 rounded-full object-cover"
      />
      <div className="flex flex-col leading-tight">
        <p className="font-semibold text-based">Kelvin Giovanno</p>
        <p className="text-sm text-black/70">kelvingio2000</p>
      </div>
    </div>
  );
};

export default Profile;