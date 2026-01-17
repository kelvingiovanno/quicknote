import { Bell } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const NotificationButton = () => {

    const [isOpen, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null);
    

    useEffect(() => {

        const handleClickOutside = (event: MouseEvent) => {
        
            if (!containerRef.current) return;

            if (!containerRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, []);

    return (
        <div ref={containerRef} className="relative">
        
            <div
                className="cursor-pointer  active:bg-white active:duration-0 hover:bg-gray-100 transition-all duration-200 ease-in flex items-center justify-center w-12 h-12 bg-white border-[3px] border-gray-200 rounded-xl"
                onClick={() => setOpen((prev) => !prev)}
            >
                <Bell className="w-5 h-5 text-gray-700" />
                <div className="absolute -right-2 -bottom-2 bg-red-500 border-2 border-white text-xs font-semibold leading-none text-white h-6 min-w-6 px-2 flex items-center justify-center rounded-full select-none">
                    9+
                </div>
            </div>

            <div
                className={`
                    absolute top-16 right-0 bg-white border-[3px] border-gray-200 
                    w-80 h-52 rounded-xl shadow-md
                    transition-all duration-150 origin-top-right
                    ${isOpen ? "scale-100 opacity-100 visible" : "scale-95 opacity-0 invisible"}
                `}
            >
                <div className="p-4 text-sm text-gray-700 font-medium border-b border-gray-200">
                    Notifications
                </div>

                <div className="h-36 w-full flex items-center justify-center leading-0 text-sm text-gray-500">
                    {"No notifications yet :)"}
                </div>
            </div>
        </div>
    );
};

export default NotificationButton;
