import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import getImagesAPI from "../axios/axios";

const SET_STATE = "SET_STATE";
const SET_BIG_IMAGE = "SET_BIG_IMAGE";
const CLOSE_BIG_IMAGE = "CLOSE_BIG_IMAGE";
const ADD_NEW_COMMENT = "ADD_NEW_COMMENT";
const NEW_COMMENT_TEXT_CHANGE = "NEW_COMMENT_TEXT_CHANGE";
const NAME_TEXT_CHANGE = "NAME_TEXT_CHANGE";

let initState = {
    isBigImageOpen: false,
    newCommentText: "",
    nameText: ""
}

let ImagesReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_STATE:
            return {
                ...state,
                data: action.data
            }
        case SET_BIG_IMAGE:
            return {
                ...state,
                bigImage: action.data,
                isBigImageOpen: true
            }
        case CLOSE_BIG_IMAGE:
            return {
                ...state,
                isBigImageOpen: false
            }
        case ADD_NEW_COMMENT:
            action.comment.text = state.newCommentText;
            return {
                ...state,
                bigImage: {
                    ...state.bigImage,
                    comments: [...state.bigImage.comments, action.comment],
                },
                newCommentText: "",
                nameText: ""
            }
        case NEW_COMMENT_TEXT_CHANGE:
            return {
                ...state,
                newCommentText: action.text,
            }
        case NAME_TEXT_CHANGE:
            return {
                ...state,
                nameText: action.text
            }
        default:
            return state
    }
}

export const setState = data => ({
    type: SET_STATE,
    data: data
})
export const setBigImage = data => ({
    type: SET_BIG_IMAGE,
    data
})
export const closeBigImage = () => ({
    type: CLOSE_BIG_IMAGE
})
export const addNewComment = comment => ({
    type: ADD_NEW_COMMENT,
    comment
})
export const newCommentTextChange = (text) => ({
    type: NEW_COMMENT_TEXT_CHANGE,
    text
})
export const nameTextChange = (text) => ({
    type: NAME_TEXT_CHANGE,
    text
})

export const getState = () => dispatch => {
    getImagesAPI.getAllImages()
        .then(data => dispatch(setState(data)))
}
export const getBigImage = id => dispatch => {
    getImagesAPI.getBigImage(id)
        .then(data => {
            dispatch(setBigImage(data))
        })
}

export default createStore(ImagesReducer, applyMiddleware(thunk))