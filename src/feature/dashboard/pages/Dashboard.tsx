import NoteList from "@/feature/notes/components/NoteList";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import { getAllRecentNotesMock } from "../load";
import NoteListSkeleton from "@/feature/notes/components/NoteListSkeleton";

const Dashboard = () => {

  const {data, isLoading} = useQuery({
    queryKey: ["recent-notes"], 
    queryFn: getAllRecentNotesMock
  });

  return (
    <>

      <section className="space-y-1">
        <h1 className="text-3xl font-semibold tracking-tight">
          Hello, Kelvin Giovanno 👋
        </h1>
        <p className="text-sm text-slate-600">
          Here’s an overview of your notes and recent activity.
        </p>
      </section>

     
      <section className="space-y-6 mt-12">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold tracking-tight text-slate-900">
            Recent Notes
          </h2>

          <Link to="/newnote">
            <button
              className="
                inline-flex items-center gap-2 rounded-md cursor-pointer
                bg-slate-900 px-4 py-2 text-sm font-medium text-white
                shadow-sm transition
                hover:bg-slate-800 hover:shadow-md
                focus:outline-none focus:ring-2 focus:ring-slate-400
              "
            >
              New note
            </button>
          </Link>
        </div>

        { isLoading ? <NoteListSkeleton /> : <NoteList datas={data}/> }
    
      </section>
    
    </>
  );
};

export default Dashboard;
