import {HIDE_LOADER, SHOW_LOADER} from "../types";

function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}

export {
    showLoader,
    hideLoader
}
