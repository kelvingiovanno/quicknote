import { Link } from "react-router";

const Dashboard = () => {



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

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="
                group relative rounded-md border border-slate-200 bg-white
                p-5 shadow-sm transition-all
                hover:scale-101
                cursor-pointer
              "
            >
              <div className="flex h-full flex-col justify-between gap-4">
                
                <div className="space-y-1">
                  <h3 className="line-clamp-1 text-sm font-medium text-slate-900">
                    Untitled Note
                  </h3>
                  <p className="line-clamp-2 text-xs leading-relaxed text-slate-600">
                    This is a short preview of your note content. You can
                    replace this later with real data.
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Jan 28, 2026</span>
                  <span
                    className="
                      opacity-0 translate-x-1 transition-all
                      group-hover:opacity-100 group-hover:translate-x-0
                      text-slate-700 font-medium
                    "
                  >
                    Open
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Dashboard;
