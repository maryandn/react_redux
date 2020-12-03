import {CREATE_POST, FETCH_POSTS} from "../types";
import {hideLoader, showLoader} from "./loaderActions";
import {showAlert} from "./alertActions";

function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post
    }
}

function fetchPosts() {
    return async dispatch => {
        try {
            dispatch(showLoader())
            console.log('dfgd');
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
            console.log(response);
            const json = await response.json()
            setTimeout(()=>{
                dispatch({type: FETCH_POSTS, payload: json})
                dispatch(hideLoader())
            },500)
        } catch (e) {
            dispatch(showAlert('Что то пошло не так'))
            dispatch(hideLoader())
        }
    }
}

export {
    createPost,
    fetchPosts
}
