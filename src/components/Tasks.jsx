import NewTask from "./NewTask.jsx";

export default function Tasks({tasks, onAdd, onDelete}) {
    return (
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <NewTask onAdd={onAdd} />
            {tasks.length === 0 && (
                <p className="text-stone-800 my-4">
                    This project does not have any tasks yet.
                </p>
            )}
            {tasks.length > 0 && (
                <ul className="p-3 md:p-4 mt-8 rounded-md bg-stone-100 mb-8">
                    {tasks.map((task) => (
                        <li key={task.id} className="flex justify-between my-4 border-solid border-2 px-2 py-2 rounded">
                            <span>{task.text}</span>
                            <button 
                            className="text-stone-700 hover:text-red-500"
                            onClick={() => onDelete(task.id)}
                            >
                                Clear
                            </button>
                        </li>
                    ))}
                </ul>
            )}        
        </section>
    )
}