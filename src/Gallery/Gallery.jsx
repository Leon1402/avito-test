import React from "react";
import { getState, getBigImage, closeBigImage, addNewComment } from "./../redux/ReduxStore";
import { connect } from "react-redux";
import Modal from "./Modal/Modal";

class Gallery extends React.Component {
    componentDidMount() {
        this.props.getState()
    }
    render() {
        if (this.props.data)
            var ImageElements = this.props.data.map(d =>
                <Image key={d.id} data={d} setBigImage={this.props.getBigImage} />
            )
        return (
            <div className="gallery">
                {ImageElements}
                {this.props.isBigImageOpen &&
                    <Modal
                        bigImage={this.props.bigImage}
                        closeBigImage={this.props.closeBigImage} 
                        addNewComment={this.props.addNewComment}/>}
            </div>
        )
    }
}

const Image = (props) => {
    return (
        <div className="image" onClick={() => {
            props.setBigImage(props.data.id)
        }}>
            <img src={props.data.url} />
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        data: state.data,
        bigImage: state.bigImage,
        isBigImageOpen: state.isBigImageOpen
    }
}

export default connect(mapStateToProps, { getState, getBigImage, closeBigImage, addNewComment })(Gallery);