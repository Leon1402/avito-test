import React from "react";
import Modal from "./Modal";

class ModalContainer extends React.Component {

    closeModalWindow = (e, ref) => {
        if (ref.current === e.target)
            this.props.closeBigImage();
    }

    addNewComment = () => {
        if (!this.props.newCommentText)
            alert("Оставьте комментарий")
        else if (!this.props.nameText)
            alert("Введите Ваше имя")
        else {
            let date = new Date().getTime()
            this.props.addNewComment({
                id: this.props.bigImage.comments.lenght,
                date
            })
        }

    }

    render() {
        return <Modal bigImage={this.props.bigImage}
            closeModalWindow={this.closeModalWindow}
            addNewComment={this.addNewComment}
            newCommentText={this.props.newCommentText}
            nameText={this.props.nameText}
            nameTextChange={this.props.nameTextChange}
            newCommentTextChange={this.props.newCommentTextChange} />
    }
}

export default ModalContainer;