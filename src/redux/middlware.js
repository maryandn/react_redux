import emailRegex from 'email-regex'
import {CREATE_POST} from "./types";
import {showAlert} from "../redux/action/alertActions";

// const forbidden = ['fuck', 'spam', 'php']

export function forbiddenWorldsMiddleware({dispatch}) {
    return function (next) {
        return function (action) {
            if (action.type === CREATE_POST) {
                // console.log(action.payload.title);
                // const found = forbidden.filter(w => action.payload.title.includes(w))
                // const found = action.payload.title.matchAll(regexp)
                const found = emailRegex({exact: true}).test(action.payload.title);
                console.log(found);
                if (!found) {
                    return dispatch(showAlert('Вы спамер, уходите отсюда'))
                }
            }
            return next(action)
        }
    }
}
