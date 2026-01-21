import { Outlet } from "react-router";

const AuthLayout = () => {

    document.body.className = "bg-slate-200";

    return (
        <div className="min-w-3xl h-screen bg-slate-200 flex justify-center items-center">
            <main className="w-md bg-white p-8 rounded-lg border border-slate-300">
                <Outlet />
            </main>
        </div>
    );
}

export default AuthLayout;