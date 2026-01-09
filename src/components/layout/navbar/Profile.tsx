const Profile = () => {
    
    return (
        <div className="flex h-full items-center gap-3 w-64">
            <img
                src="https://i.pravatar.cc/150?img=12"
                alt="profile"
                className="rounded-full w-14 h-14"
            />
            <div className="flex flex-col">
                <p className="font-bold">Kelvin Giovanno</p>
                <p className="text-xs">kelvingiovanno@gmail.com</p>
            </div>
        </div>
    );
}

export default Profile;