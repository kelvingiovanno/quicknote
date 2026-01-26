import Button from "@/components/ui/Button";
import { Link } from "react-router";

const Favorites = () => {
    return (
        <>
            <section className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    <p className="text-xl font-bold">Favorite Notes</p>
                    <Link to={`/new-note`}>    
                        <Button title={"Create Note"} variant={"PRIMARY"} />
                    </Link>
                </div>
                <div className="grid xl:grid-cols-4 xl2:grid-cols-5 lg:grid-cols-3 grid-cols-2 gap-4">
                    <div className="h-72 bg-white border border-slate-300 rounded-xl "></div>
                    <div className="h-72 bg-white border border-slate-300 rounded-xl "></div>
                    <div className="h-72 bg-white border border-slate-300 rounded-xl "></div>
                    <div className="h-72 bg-white border border-slate-300 rounded-xl "></div>
                    <div className="h-72 bg-white border border-slate-300 rounded-xl "></div>
                    <div className="h-72 bg-white border border-slate-300 rounded-xl "></div>
                    <div className="h-72 bg-white border border-slate-300 rounded-xl "></div>
                    <div className="h-72 bg-white border border-slate-300 rounded-xl "></div>
                </div>
            </section>
        </>
    );
}

export default Favorites;