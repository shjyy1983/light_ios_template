const SET_LIGHTOS = "SET_LIGHTOS";
const SET_TOKEN = "SET_TOKEN";
const SET_MODE = "SET_MODE";
const SET_AUTH = "SET_AUTH";
const SET_SERVER = "SET_SERVER";
const SET_TITLE = "SET_TITLE";
const SET_STATUS = "SET_STATUS";
const SET_TYPE = "SET_TYPE";
const SET_CUR_INSTRUCT = "SET_CUR_INSTRUCT";
const SET_DATA = "SET_DATA";
const SET_POS = "SET_POS";
const SET_INFINITE_STATUS = "SET_INFINITE_STATUS";
const SET_LOAD_STATUS = "SET_LOAD_STATUS";
const SET_REFRESH_STATUS = "SET_REFRESH_STATUS";
const DEL_ITEM = "DEL_ITEM";
const SET_NOT_PASS_INSTRAMOUNT = "SET_NOT_PASS_INSTRAMOUNT"

export default {
    [SET_LIGHTOS](state, lightOS) {
        if (lightOS != undefined) {
            state.lightOS = lightOS
        }
    },
    [SET_TOKEN](state, token) {
        if (token != undefined && token != "") {
            state.token = token
        }
    },
    [SET_MODE](state, mode) {
        if (mode != undefined && mode != "") {
            state.mode = mode
        }
    },
    [SET_SERVER](state, server) {
        if (server != undefined && server != "") {
            state.server = server
        }
    },
    [SET_AUTH](state, auth) {
        if (auth != undefined && auth != "") {
            state.auth = auth
        }
    },
    [SET_TITLE](state, title) {
        if (title != undefined && title != "") {
            state.title = title
        }
    },
    [SET_STATUS](state, status) {
        if (status != undefined && status != "") {
            state.status = status
        }
    },
    [SET_TYPE](state, type) {
        if (type != undefined && type != "") {
            state.type = type
        }
    },
    [SET_CUR_INSTRUCT](state, obj) {
        if (obj != undefined && typeof obj == "object") {
            state.instruct = obj;
        }
    },
    [SET_DATA](state, info) {
        let items = state.items["type_" + state.type]["status_" + state.status];
        if (info != undefined && info.length > 0) {
            items.data = info;
            items.length = info.length;
        } else {
            items.data = [];
            items.length = 0;
        }
    },
    [SET_POS](state, height) {
        let items = state.items["type_" + state.type]["status_" + state.status];
        items.barPos = height != undefined && height > 0 ? height : 0;
    },
    [SET_INFINITE_STATUS](state, infiniteOver) {
        let items = state.items["type_" + state.type]["status_" + state.status];
        items.infiniteOver = infiniteOver != undefined && infiniteOver != null ? infiniteOver : null;
    },
    [SET_LOAD_STATUS](state, load) {
        let items = state.items["type_" + state.type]["status_" + state.status];
        items.load = load != undefined ? load : false;
    },
    [SET_REFRESH_STATUS](state, result) {
        let items = state.items["type_" + state.type];
        items["status_3"].refresh = items["status_5"].refresh = result != undefined && result == "3" ? true : false
        items["status_4"].refresh = result != undefined && result == "4" ? true : false
    },
    [DEL_ITEM](state, index) {
        let items = state.items["type_" + state.type]["status_" + state.status];
        items.data.splice(index, 1);
        items.length--;
    },
    [SET_NOT_PASS_INSTRAMOUNT](state, amount) {
        if (typeof amount !== 'undefined' && amount !== '') {
        state.notPassInstrAmount = amount
        }
    }
}