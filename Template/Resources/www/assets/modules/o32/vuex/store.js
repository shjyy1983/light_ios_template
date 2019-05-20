import App from "light"
import Vuex from "vuex"
import mutations from "./mutatuons"
import actions from "./actions"

App.Vue.use(Vuex);

let state = {
    // 运行环境(是否在lightOS内)
    lightOS: false,

    // 页面标题
    title: "未审批",

    // 分页时每页的数据集长度
    amount: 5,

    // 令牌
    token: "",

    // 区分单级审批(1)和多级审批(2)
    mode: "2",

    // 授权访问类型(流程审批，风控审批，组合流程审批，组合风控审批)
    auth: "",

    // 区分指令类型，风控(1)和流程(2)
    type: "2",

    // 区分指令状态，未审批(1)、已通过(3)、已拒绝(4)、本级已通过(5)
    status: "1",

    // 指令详情，当前指令信息
    instruct: null,

    // 从login页获取的server
    server: "",

    // 指令列表(不同状态下的列表数据(包括滚动条高度)保存，目前共八种)
    // 状态值 load 表示该状态下是否加载过
    // 状态值 refresh 仅用于设置指令删除后强制刷新数据项
    items: {
        type_1: {
            status_1: {
                data: [],
                length: 0,
                infiniteOver: null,
                barPos: 0,
                load: false,
                refresh: false
            },
            status_3: {
                data: [],
                length: 0,
                infiniteOver: null,
                barPos: 0,
                load: false,
                refresh: false
            },
            status_4: {
                data: [],
                length: 0,
                infiniteOver: null,
                barPos: 0,
                load: false,
                refresh: false
            },
            status_5: {
                data: [],
                length: 0,
                infiniteOver: null,
                barPos: 0,
                load: false,
                refresh: false
            }
        },
        type_2: {
            status_1: {
                data: [],
                length: 0,
                infiniteOver: null,
                barPos: 0,
                load: false,
                refresh: false
            },
            status_3: {
                data: [],
                length: 0,
                infiniteOver: null,
                barPos: 0,
                load: false,
                refresh: false
            },
            status_4: {
                data: [],
                length: 0,
                infiniteOver: null,
                barPos: 0,
                load: false,
                refresh: false
            },
            status_5: {
                data: [],
                length: 0,
                infiniteOver: null,
                barPos: 0,
                load: false,
                refresh: false
            }
        }
    }
};

let getters = {
    bizData(state) {
        return state.items["type_" + state.type][
            "status_" + state.status
        ].data;
    },
    bizDataCount(state) {
        return state.items["type_" + state.type][
            "status_" + state.status
        ].length;
    },

    barPos(state) {
        return state.items["type_" + state.type][
            "status_" + state.status
        ].barPos;
    },
    infiniteOver(state) {
        return state.items["type_" + state.type][
            "status_" + state.status
        ].infiniteOver;
    },
    isLoad(state) {
        return state.items["type_" + state.type][
            "status_" + state.status
        ].load;
    },
    isRefresh(state) {
        return state.items["type_" + state.type][
            "status_" + state.status
        ].refresh;
    }
};

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})