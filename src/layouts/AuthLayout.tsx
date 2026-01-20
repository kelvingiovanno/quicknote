import { Outlet } from "react-router";

const AuthLayout = () => {
    return (
        <div className="w-screen h-screen bg-slate-100 flex justify-center items-center">
            <main className="bg-white p-8 w-96 rounded-lg border-2 border-slate-200">
                <Outlet />
            </main>
        </div>
    );
}

export default AuthLayout;