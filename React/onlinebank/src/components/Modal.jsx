import { useEffect, useRef, useState } from "react"

const Modal = ({ isOpen, product }) => {
    const [isModalOpen, setModelOpen] = useState(isOpen);
    const modelRef = useRef();
    useEffect(() => {
        console.dir(modelRef.current);
        modelRef.current.checked = isModalOpen;
        console.log(product);
    }, []);
    return (
        <div>
            <input className="modal-state" id="modal-3" type="checkbox" ref={modelRef} />
            <div className="modal">
                <label className="modal-overlay"></label>
                <div className="modal-content flex flex-col gap-5">
                    <label htmlFor="modal-3" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => setModelOpen(false)}>✕</label>
                    <h2 className="text-xl">Modal title 3</h2>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorum voluptate ratione dicta. Maxime cupiditate, est commodi consectetur earum iure, optio, obcaecati in nulla saepe maiores nobis iste quasi alias!</span>
                    <div className="flex gap-3">
                        <button className="btn btn-error btn-block">Delete</button>
                        <button className="btn btn-block">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
