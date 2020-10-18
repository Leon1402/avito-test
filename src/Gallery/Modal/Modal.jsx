import React from "react";
import './Modal.css';

const Modal = (props) => {

    let windowRef = React.createRef();
    let buttonRef = React.createRef();
    let commentElements = props.bigImage.comments.map(c => {
        let date = new Date(c.date);
        let dateParse = date.getDate() + '.' + Number(date.getMonth() + 1) + '.' + date.getFullYear();

        return <div className="modal-comment" key={c.id}>
            <div className="comment-date">{dateParse}</div>
            <div className="comment-text">{c.text}</div>
        </div>
    })
    return (
        <div className="modal-block" ref={windowRef}
            onClick={(e) => { props.closeModalWindow(e, windowRef) }}>
            <div className="modal-item">
                <div className="modal-image">
                    <div className="modal-image-item">
                        <img src={props.bigImage.url} />
                    </div>
                    <div>
                        {commentElements}
                    </div>
                </div>
                <div className="modal-newcoment">
                    <input placeholder="Ваше имя"
                        value={props.nameText}
                        onChange={(e) => { props.nameTextChange(e.currentTarget.value) }} />
                    <input placeholder="Ваш коментарий"
                        value={props.newCommentText}
                        onChange={(e) => { props.newCommentTextChange(e.currentTarget.value) }} />
                    <button
                        onClick={() => { props.addNewComment() }}
                        disabled = {props.newCommentText === ""|| props.nameText === ""}>Оставить комментарий</button>
                </div>
                <div className="modal-close" ref={buttonRef}
                    onClick={(e) => { props.closeModalWindow(e, buttonRef) }} />
            </div>
        </div>
    )
}

export default Modal;