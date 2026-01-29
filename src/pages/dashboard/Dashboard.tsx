import { Link } from "react-router";
import Button from "@/components/ui/Button";

const Dashboard = () => {
  return (
    <div className="space-y-10">
      <section className="flex flex-col gap-1">
        <h1 className="text-3xl font-semibold tracking-tight">
          Hello, Kelvin Giovanno
        </h1>
        <p className="text-sm text-slate-600">
          Here’s an overview of your notes and recent activity.
        </p>
      </section>

      <section className="space-y-4">

        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Recent Notes</h2>

          <Link to="/new-note">
            <Button title="Create Note" variant="PRIMARY" />
          </Link>
        </div>

        <div className="grid gap-4  sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 ">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="group relative aspect-3/3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:border-slate-300 hover:shadow-md"
            >
              <div className="flex h-full flex-col justify-between">
                <div>
                  <h3 className="line-clamp-1 text-sm font-medium text-slate-900">
                    Untitled Note
                  </h3>

                  <p className="mt-1  text-xs text-slate-600">
                    This is a short preview of your note content. You can
                    replace this later with real data.
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Jan 28, 2026</span>
                  <span className="opacity-0 transition group-hover:opacity-100 cursor-pointer">
                    Open →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
