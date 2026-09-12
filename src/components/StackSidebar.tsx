import type { Technology } from "../types/technology";

interface StackSidebarProps {
    selectedTechnologies: Technology[];
    onRemove: (id: string) => void;
    onRemoveAll: () => void;
}

const StackSidebar = ({
    selectedTechnologies,
    onRemove,
    onRemoveAll,
}: StackSidebarProps) => {
    return (
        <aside className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-lg font-bold text-slate-900">
                        Your Stack
                    </h3>

                    <p className="mt-1 text-xs text-slate-400">
                        {selectedTechnologies.length}{" "}
                        {selectedTechnologies.length === 1
                            ? "technology"
                            : "technologies"}{" "}
                        selected
                    </p>
                </div>

                {selectedTechnologies.length > 0 && (
                    <button
                        type="button"
                        onClick={onRemoveAll}
                        className="text-xs font-medium text-red-500 hover:text-red-600"
                    >
                        Remove All
                    </button>
                )}
            </div>

            {selectedTechnologies.length === 0 ? (
                <div className="flex min-h-48 items-center justify-center text-center">
                    <div>
                        <p className="text-sm font-medium text-slate-500">
                            Your stack is empty
                        </p>

                        <p className="mt-1 text-xs text-slate-400">
                            Add technologies to build your stack.
                        </p>
                    </div>
                </div>
            ) : (
                <div className="mt-5 space-y-3">
                    {selectedTechnologies.map((technology) => (
                        <div
                            key={technology.id}
                            className="flex items-center gap-3 rounded-lg border border-slate-100 p-3"
                        >
                            <img
                                src={technology.icon}
                                alt={`${technology.name} logo`}
                                className="h-7 w-7 object-contain"
                            />

                            <div className="min-w-0 flex-1">
                                <p className="truncate text-sm font-semibold text-slate-800">
                                    {technology.name}
                                </p>

                                <p className="text-xs text-slate-400">
                                    {technology.category}
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={() => onRemove(technology.id)}
                                className="text-xs font-medium text-slate-400 hover:text-red-500"
                            >
                                ✕
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </aside>
    );
};

export default StackSidebar;