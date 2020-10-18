import React from "react";
import "./Gallery.css";
import { getState, getBigImage, closeBigImage, addNewComment, newCommentTextChange, nameTextChange } from "./../redux/ReduxStore";
import { connect } from "react-redux";
import ModalContainer from "./Modal/ModalContainer";
import Image from "./Image/Image";

const Gallery = (props) => {
    if (props.data)
        var ImageElements = props.data.map(d =>
            <Image key={d.id} data={d} setBigImage={props.getBigImage} />
        )
    return (
        <div className="gallery">
            {ImageElements}
            {props.isBigImageOpen &&
                <ModalContainer {...props} />}
        </div>
    )
}

class GalleryContainer extends React.Component {
    componentDidMount() {
        this.props.getState()
    }
    render() {
        return <Gallery {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.data,
        bigImage: state.bigImage,
        isBigImageOpen: state.isBigImageOpen,
        newCommentText: state.newCommentText,
        nameText: state.nameText
    }
}

export default connect(mapStateToProps, {
    getState, getBigImage, closeBigImage, addNewComment,
    newCommentTextChange, nameTextChange
})(GalleryContainer);