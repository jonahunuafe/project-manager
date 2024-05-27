import Button from "./Button";

export default function ProjectSideBar({ 
    onStartAddProject, 
    projects, 
    onSelectProject,
    selectedProjectId 
    }) {
    return (
        <aside className="px-8 py-16 bg-stone-900 text-stone-50 md:w-72 md:rounded-r-xl flex md:block justify-center flex-col">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200 text-center md:text-left">
                Your projects
            </h2>
            <div className="mx-auto">
                <Button onClick={onStartAddProject} >
                    + Add Project
                </Button>
            </div>
            <ul className="mt-8">
                {projects.map((project) => {
                    let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"

                    if(project.id === selectedProjectId) {
                        cssClasses += " bg-stone-800 text-stone-200"
                    } else {
                        cssClasses += " text-stone-400"
                    }

                    return (
                        <li key={project.id}>
                            <button 
                            className = {cssClasses}
                            onClick={() => onSelectProject(project.id)}
                            >
                                {project.title}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </aside>
    );
}