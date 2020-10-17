import React from "react";
import { addNewComment } from "../../redux/ReduxStore";

const Modal = (props) => {
    let windowRef = React.createRef()
    let buttonRef = React.createRef()
    // console.log(props)
    let closeModalWindow = (e, ref) => {
        if (ref.current === e.target)
            props.closeBigImage()
    }
    let commentElements = props.bigImage.comments.map(c => {
        let date = new Date(c.date)
        let dateParse = date.getDate()+'.'+date.getMonth()+1+'.'+date.getFullYear()
        
        return <div className="modal-comment" key={c.id}>
            <div className="comment-date">{dateParse}</div>
            <div className="comment-text">{c.text}</div>
        </div>
    })
    let addNewComment = (e) => {
        let date = new Date().getTime()
        props.addNewComment({
            id: props.bigImage.comments.lenght,
            text: e.currentTarget.value,
            date
        })
    }

    return (
        <div className="modal-block" ref={windowRef}
            onClick={(e) => { closeModalWindow(e, windowRef) }}>
            <div className="modal-item">
                <div className="modal-image">
                    <div className="modal-image-item">
                        <img src={props.bigImage.url} />
                    </div>
                    {commentElements}
                </div>
                <div className="modal-newcoment">
                    <input placeholder="Ваше имя" />
                    <input placeholder="Ваш коментарий" />
                    <button onClick={addNewComment}>Оставить комментарий</button>
                </div>
                <div className="modal-close" ref={buttonRef}
                    onClick={(e) => { closeModalWindow(e, buttonRef) }} />
            </div>
        </div>
    )
}

export default Modal;