import { useEffect, useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";

function AddItem(props) {
    const [showForm, setShowForm] = useState(false);
    const [animateForm, setAnimateForm] = useState(false);

    const graphOptions = props.graphs;

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowForm(false);
        setAnimateForm(false); // reset animation state
    };

    // Trigger animation after form becomes visible
    useEffect(() => {
        if (showForm) {
            // Small delay ensures transition works after mount
            const timeout = setTimeout(() => setAnimateForm(true), 10);
            return () => clearTimeout(timeout);
        }
    }, [showForm]);

    return (
        <>
            {!showForm && (
                <HiOutlinePlus
                    className="justify-self-center align-middle m-auto sidebar-icon !bg-gray-700 !size-25"
                    onClick={() => setShowForm(true)}
                />
            )}

            {/* The form container stays in the DOM, animation triggered via state */}
            {showForm && (
                <div className="absolute inset-0 z-50 bg-[rgba(0,0,0,0.4)] flex flex-col justify-center transition-opacity duration-300">
                    <form
                        onSubmit={handleSubmit}
                        className={`flex flex-col text-3xl align-middle bg-blue-900 w-4/8 h-15/16 mx-auto rounded-3xl text-center transform transition-all duration-800 ease-out ${
                            animateForm
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-5'
                        }`}
                    >
                        <h1 className="font-bold text-4xl my-15">Select a chart or diagram to view:</h1>
                        <div className="mb-6 grid grid-rows-2 grid-cols-2 w-7/8 mx-auto">
                            {graphOptions.map(({ name: option, icon: IconComponent }) => (
                                <div className="mx-auto my-3 bg-[rgba(0,0,0,0.2)] rounded-3xl p-4" key={option}>
                                    <label htmlFor={option} className="hover:cursor-pointer">
                                        <IconComponent className="chart-icon" />
                                        <span className="font-bold">{option} </span>
                                        <input
                                            id={option}
                                            type="checkbox"
                                            name={option}
                                            value={option}
                                            className="hover:cursor-pointer"
                                        />
                                    </label>
                                </div>
                            ))}
                        </div>
                        <div className="inline">
                            <button
                                type="button"
                                className="submit-btn !bg-gray-600 mb-4 text-2xl "
                                onClick={() => {
                                    setShowForm(false);
                                    setAnimateForm(false);
                                }}
                            >
                                Cancel
                            </button>
                            <button type="submit" className="submit-btn text-4xl">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
}

export default AddItem;
