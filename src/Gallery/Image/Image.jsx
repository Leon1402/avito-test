import React from "react";

const Image = (props) => {
    return (
        <div className="image" onClick={() => {
            props.setBigImage(props.data.id)
        }}>
            <img src={props.data.url} />
        </div>
    )
}

export default Image