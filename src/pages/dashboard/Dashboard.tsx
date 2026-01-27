import { Link } from "react-router";
import Button from "@/components/ui/Button";

const Dashboard = () => {

    return (
        <>
            <section className="mb-10">
                <p className="text-2xl font-bold">Hello, Kelvin Giovanno</p>
                <p className="text-based text-black/70">Here’s an overview of your notes and recent activity.</p>
            </section>
            {/* <section className="flex justify-start">
                <Button title="Create Note" variant={"PRIMARY"}/>
            </section> */}
            <section className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    <p className="text-xl font-bold">Recents Notes</p>
                    <Link to={`/new-note`}>    
                        <Button title={"Create Note"} variant={"PRIMARY"} />
                    </Link>
                </div>
                <div className="grid xl:grid-cols-3 xl2:grid-cols-5 lg:grid-cols-2 gap-4">
                    <div className="aspect-3/2 bg-white border border-slate-300 rounded-xl "></div>
                    <div className="aspect-3/2 bg-white border border-slate-300 rounded-xl "></div>
                    <div className="aspect-3/2 bg-white border border-slate-300 rounded-xl "></div>
                    <div className="aspect-3/2 bg-white border border-slate-300 rounded-xl "></div>
                    <div className="aspect-3/2 bg-white border border-slate-300 rounded-xl "></div>
                    <div className="aspect-3/2 bg-white border border-slate-300 rounded-xl "></div>
                    <div className="aspect-3/2 bg-white border border-slate-300 rounded-xl "></div>
                    <div className="aspect-3/2 bg-white border border-slate-300 rounded-xl "></div>
                </div>
            </section>
        </>
    )
}

export default Dashboard;