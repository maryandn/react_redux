import {HIDE_ALERT, SHOW_ALERT} from "../types";

function showAlert(text) {
    return dispatch => {
        dispatch(
            {
                type: SHOW_ALERT,
                payload: text
            }
        )
        setTimeout(()=>{
            dispatch(hideAlert())
        }, 3000)
    }
}

function hideAlert() {
    return {
        type: HIDE_ALERT
    }
}

export {
    showAlert,
    hideAlert
}
