import { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";


export default function NewProject({ onAdd, onCancel }) {
    const modal = useRef();


    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handledSave() {
        const enteredTitle = title.current.value;
        const enteredDescription =  description.current.value;
        const enteredDuedate = dueDate.current.value;

        //Validation
        if(enteredTitle.trim() === "" || 
        enteredDescription.trim() === "" || 
        enteredDuedate.trim() === "") {
            //show the error modal
            modal.current.open();
            return;
        }
        
        
        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDuedate
        });
    }

    return (
        <>  
            <Modal ref={modal} buttonCaption="Close">
                <h2 className="text-xl font-bold text-stone-700 my-4">Invalid input</h2>
                <p className="text-stone-600 mb-4">
                    Oops ... looks like you forgot to enter a value.
                </p>
                <p className="text-stone-600 mb-4">
                    Please make sure you provide a valid value for every input field.
                </p>
            </Modal>
            <div className="w-11/12 md:w-[35rem] mt-16 mx-auto md:mx-0">
                <div>
                    <menu className="flex items-center justify-end gap-4 my-4">
                        <li>
                            <button 
                            className="text-stone-800 hover:text-stone-950"
                            onClick={onCancel}
                            >
                                Cancel
                            </button>
                        </li>
                        <li>
                            <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                            onClick={handledSave}>
                                Save
                            </button>
                        </li>
                    </menu>
                </div>
                <div>
                    <Input 
                    type="text"
                    label="Title" 
                    ref={title}
                    />
                    <Input 
                    label="Description" 
                    textarea 
                    ref={description}
                    />
                    <Input 
                    type="date"
                    label="Due Date" 
                    ref={dueDate}
                    />
                </div>
            </div>
        </>
    );
}