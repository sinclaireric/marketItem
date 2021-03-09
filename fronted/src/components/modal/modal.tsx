import React from "react";
import ReactDOM from "react-dom";

interface Showing {

    isShowing:boolean,
    hide:any,
    title:string,

}


const Modal: React.FC<Showing> = (props)  =>


    props.isShowing
        ? ReactDOM.createPortal(
        <>
            <div className="modal-overlay">
                <div className="modal-wrapper">
                    <div className="modal">
                        <div className="modal-header">
                            <h4>{props.title}</h4>
                            <button
                                type="button"
                                className="modal-close-button"
                                onClick={props.hide}
                            >
                                <span>&times;</span>
                            </button>
                        </div>

                        <div className="modal-body">{props.children}</div>

                    </div>
                </div>
            </div>
        </>,
        document.body
        )
        : null;



export default Modal;