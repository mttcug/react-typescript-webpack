
import axios from 'axios'

let $POST = (param) => {
    return axios(Object.assign({
        method: "post",
        headers: {
            "Content-Type": "application/json"
        }
    }, param))
}
let $GET = (param) => {
    return axios(Object.assign({
        method: "get"
    }, param))
}


exports = {
    $GET,
    $POST
}