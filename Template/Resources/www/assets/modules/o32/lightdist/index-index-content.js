webpackJsonp([1],{

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(56)
}
var Component = __webpack_require__(9)(
  /* script */
  __webpack_require__(59),
  /* template */
  __webpack_require__(65),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-777122c8",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _light = __webpack_require__(2);

var _light2 = _interopRequireDefault(_light);

var _lightSdk = __webpack_require__(4);

var _lightSdk2 = _interopRequireDefault(_lightSdk);

var _store = __webpack_require__(10);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var State = _store2.default.state;

function instruct() {
    if (State.instruct) {
        return {
            instructionNo: State.instruct.instructionNo,
            modifyIndex: State.instruct.modifyIndex
        };
    } else return null;
};

function execute(route, args, cb) {
    _light2.default.extend(args, {
        tokenKey: State.token
    });

    _light2.default.ajax({
        type: "post",
        url: ({"src":"/Users/hj/Desktop/work5/SVN/O32_Sources/front/ZGJ2.0/jxrs2.0","dist":"/var/folders/3g/bmls9ptn1r359cdc666xljb40000gn/T/jxrs2.01552031180628","pluginsRoot":"/Users/hj/.lighting-plugins","authStore":"/Users/hj/.lighting-plugins/LIGHTING-AUTH-STORE","project":"jxrs2.0","version":"0.0.1","desc":"移动审批建信人寿项目2.0版本","type":"vue","link_id":"8112734868606429","env":{"local":{"note":"本地环境","scope":"O32","server":"http://localhost:8080"},"dev":{"note":"开发环境","scope":"O32","server":"http://192.168.39.79:8080"},"dev2":{"note":"开发环境","scope":"O32","server":"http://192.168.163.190:8080"},"test":{"note":"测试环境","scope":"O32","server":"http://10.20.36.91:8080"},"unknown":{"note":"API服务不明确","scope":"O32"}},"pluginsDir":"/Users/hj/.lighting-plugins/lib","note":"API服务不明确","scope":"O32"}.server ? {"src":"/Users/hj/Desktop/work5/SVN/O32_Sources/front/ZGJ2.0/jxrs2.0","dist":"/var/folders/3g/bmls9ptn1r359cdc666xljb40000gn/T/jxrs2.01552031180628","pluginsRoot":"/Users/hj/.lighting-plugins","authStore":"/Users/hj/.lighting-plugins/LIGHTING-AUTH-STORE","project":"jxrs2.0","version":"0.0.1","desc":"移动审批建信人寿项目2.0版本","type":"vue","link_id":"8112734868606429","env":{"local":{"note":"本地环境","scope":"O32","server":"http://localhost:8080"},"dev":{"note":"开发环境","scope":"O32","server":"http://192.168.39.79:8080"},"dev2":{"note":"开发环境","scope":"O32","server":"http://192.168.163.190:8080"},"test":{"note":"测试环境","scope":"O32","server":"http://10.20.36.91:8080"},"unknown":{"note":"API服务不明确","scope":"O32"}},"pluginsDir":"/Users/hj/.lighting-plugins/lib","note":"API服务不明确","scope":"O32"}.server : State.server) + "/mobile-approve-web/" + route,
        data: args,
        dataType: "json",
        timeout: 10000,
        complete: function complete() {
            setTimeout(function () {
                $.hidePreloader();
                $.hideIndicator();
            }, 250);

            $.pullToRefreshDone('.pull-to-refresh-content');
        },
        success: function success(info) {
            if (info.errCode != 0) {
                if (info.errCode == 2010) {
                    // 令牌无效或者过期, 请重新登录
                    $.confirm(info.errMsg, function () {
                        if (State.lightOS) {
                            _lightSdk2.default.native.writeData({
                                key: "logOut",
                                value: true
                            }, function () {
                                _lightSdk2.default.native.close();
                            });
                        } else history.back();
                    });
                } else $.toast(info.errMsg, 1500, "retoast");
            } else cb && cb(info);
        },
        error: function error() {
            $.toast("系统连接异常，请重试");
        }
    });
};

exports.default = {
    getLists: function getLists(approveType, approveStatus, cb, index) {
        // 获取审批列表（未审批/本级已通过/已通过/已拒绝）
        var route = approveType == 2 ? "flow/getFlowApprDealListJX.json" : "risk/getRiskApprDealListJX.json";
        var args = {
            approveStatus: approveStatus,
            index: index && index > 0 ? index : 0,
            amount: State.amount
        };

        return execute(route, args, cb);
    },
    getProcessLists: function getProcessLists(approveType, cb) {
        // 获取审批流程（审批明细）列表
        var route = approveType == 2 ? "flow/getFlowApprDealJX.json" : "risk/getRiskApprDealJX.json";
        var args = _light2.default.extend({}, instruct());

        return execute(route, args, cb);
    },
    getInstructInfo: function getInstructInfo(approveType, cb) {
        // 获取指令明细信息
        var route = "common/getInstrDealJX.json";
        var args = _light2.default.extend({
            approveType: approveType
        }, instruct());

        return execute(route, args, cb);
    },
    getInstructSecurity: function getInstructSecurity(approveType, cb) {
        // 获取指令证券列表
        var route = "common/getInstrBondListJX.json";
        var args = _light2.default.extend({
            approveType: approveType
        }, instruct());

        return execute(route, args, cb);
    },
    getMortagageBond: function getMortagageBond(approveType, businessDate, cb) {
        // 获取质押债券列表
        var route = "common/getMortagageBond.json";
        var args = _light2.default.extend({
            approveType: approveType,
            businessDate: businessDate
        }, instruct());

        return execute(route, args, cb);
    },
    getFtpStatus: function getFtpStatus(cb) {
        // 获取ftp连接状态
        var route = "common/testFTP.json";
        var args = {};

        return execute(route, args, cb);
    },
    getTradeProfile: function getTradeProfile(approveType, cb) {
        // 获取交易附件
        var route = "common/getAttachmentInfo.json";
        var args = _light2.default.extend({
            approveType: approveType
        }, instruct());

        return execute(route, args, cb);
    },
    getRiskLists: function getRiskLists(cb) {
        // 获取触警明细列表
        var route = "risk/getRiskDetailJX.json";
        var args = _light2.default.extend({}, instruct());

        return execute(route, args, cb);
    },
    getDepositInfo: function getDepositInfo(approveType, cb) {
        // 获取存款明细
        var route = "common/getDepositDealInfoJX.json";
        var args = _light2.default.extend({
            approveType: approveType
        }, instruct());

        return execute(route, args, cb);
    },
    getDepositContract: function getDepositContract(cb) {
        // 获取存款合同信息
        var route = "common/getDepositContractJX.json";
        var args = _light2.default.extend({}, instruct());

        return execute(route, args, cb);
    },
    approve: function approve(instructionNo, modifyIndex, approveType, approveResult, remark, cb) {
        // 执行审批操作
        var route = "common/operationInstrJX.json";
        var args = _light2.default.extend({
            instructionNo: instructionNo,
            modifyIndex: modifyIndex,
            approveType: approveType,
            approveResult: approveResult,
            approvePostil: remark,
            approveClass: "1" // 审批分类默认普通指令
        });

        return execute(route, args, cb);
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(57);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(8)("213f70e9", content, true, {});

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".content[data-v-777122c8]::-webkit-scrollbar{width:0}.content .pull-to-refresh-layer[data-v-777122c8]{height:44px}.content .list-block[data-v-777122c8]{margin:0}.content .list-block li.card[data-v-777122c8]{margin:0;margin-top:.5rem;box-shadow:none}.content .list-block li.card .card-content-inner[data-v-777122c8]{padding:0 .75rem}.content .list-block li.card .card-content-inner .item-inner[data-v-777122c8]{padding:0;padding-top:.5rem;font-size:.65rem;line-height:.9rem;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.content .list-block li.card .card-content-inner .item-inner.header[data-v-777122c8]{min-height:2.8rem}.content .list-block li.card .card-content-inner .item-inner.item-content[data-v-777122c8]{padding-bottom:.65rem}.content .list-block li.card .card-content-inner .item-inner.footer[data-v-777122c8]{min-height:3.3rem}.content .list-block li.card .card-content-inner .item-inner.footer.no-border[data-v-777122c8]:after{display:none}.content .list-block li.card .card-content-inner .item-inner.footer .row[data-v-777122c8],.content .list-block li.card .card-content-inner .item-inner.item-content .row[data-v-777122c8]{margin-bottom:.65rem}.content .list-block li.card .card-content-inner .item-inner.footer .row[data-v-777122c8]:last-child,.content .list-block li.card .card-content-inner .item-inner.item-content .row[data-v-777122c8]:last-child{margin-bottom:0}.content .list-block li.card .card-content-inner .item-inner .row[data-v-777122c8]{width:100%;margin-left:0}.content .list-block li.card .card-content-inner .item-inner .row .start[data-v-777122c8]{width:56%;margin-left:0}.content .list-block li.card .card-content-inner .item-inner .row .end.up-down span[data-v-777122c8],.content .list-block li.card .card-content-inner .item-inner .row .start.up-down span[data-v-777122c8]{display:block;min-height:.9rem}.content .list-block li.card .card-content-inner .item-inner .row .risk-count[data-v-777122c8]{margin:0 .25rem;font-size:17px;vertical-align:bottom;color:#ff9600}.content .list-block li.card .card-content-inner .item-inner .row .label[data-v-777122c8]{color:#999}.content .list-block li.card .card-content-inner .item-inner .row .number[data-v-777122c8]{font-size:15px;color:#ff9600}.content .list-block li.card .card-content-inner .item-inner .row .order[data-v-777122c8]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;padding-right:.25rem;height:.7rem;border:1px solid #ff9600;font-size:.55rem;color:#ff9600;line-height:1.25;border-radius:.1rem;overflow:hidden;position:relative}.content .list-block li.card .card-content-inner .item-inner .row .order i[data-v-777122c8]{width:.6rem;margin-right:.25rem;background:#ff9600;font-style:normal;color:#fff}.content .list-block li.card .card-content-inner .item-inner .row .date[data-v-777122c8]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;padding:0 .25rem;height:.7rem;background-image:-webkit-linear-gradient(47deg,#4277eb,#4e72e2 52%,#6f6fe9);background-image:linear-gradient(43deg,#4277eb,#4e72e2 52%,#6f6fe9);border-radius:.1rem;font-size:.55rem;line-height:.7rem;color:#fff}.content .list-block li.card .card-footer[data-v-777122c8]{-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.content .list-block li.card .card-footer a.button[data-v-777122c8]{width:3.6rem;height:1.25rem;line-height:1.2rem;margin-left:.5rem;border-radius:.6rem;font-size:.6rem}.content .list-block li.card .card-footer a.button.button-pass[data-v-777122c8]{border-color:#6f6fe9;color:#6f6fe9}.content .list-block li.card .card-footer a.button.button-reject[data-v-777122c8]{border-color:#8cc888;color:#8cc888}.content .list-block li.card .card-footer a.button.button-detail[data-v-777122c8]{width:2.8rem;border-color:#999;color:#999}.content .list-block li.card .card-footer a.button.button-detail-full[data-v-777122c8]{width:4.2rem;border-color:#999;color:#999}.content .list-block li.card .card-footer[data-v-777122c8]:before,.content .list-block li.card .item-inner[data-v-777122c8]:after{background-color:#e3e3e3}.content .list-block li.card[data-v-777122c8]:last-child{margin-bottom:.5rem}.content .list-block li.card:last-child .item-inner[data-v-777122c8]:after{display:block}.content .list-block li.card:last-child .item-inner.no-border[data-v-777122c8]:after{display:none}.content .list-none[data-v-777122c8]{padding-top:6.65rem}.content .list-none .icon-list-none[data-v-777122c8]{width:5.3rem;height:5.3rem;margin:0 auto;margin-bottom:1rem;background:url(" + __webpack_require__(58) + ") no-repeat;background-size:100% 100%}", ""]);

// exports


/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "lightdist/icon-list-none.png?e7db67d13a5316d70b75d2d8ea13719d";

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _light = __webpack_require__(2);

var _light2 = _interopRequireDefault(_light);

var _vuex = __webpack_require__(5);

var _Divider = __webpack_require__(60);

var _Divider2 = _interopRequireDefault(_Divider);

var _fetch = __webpack_require__(48);

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {
            loading: false
        };
    },

    components: {
        Divider: _Divider2.default
    },
    computed: _extends({
        hitTheBottom: function hitTheBottom() {
            if (this.infiniteOver === "true") {
                return this.bizDataCount > 0 ? "show-divider" : null;
            } else if (this.infiniteOver === "false") {
                return "show-preloader";
            } else {
                return null;
            }
        }
    }, (0, _vuex.mapState)(["type", "status"]), (0, _vuex.mapGetters)(["bizData", "bizDataCount", "barPos", "infiniteOver", "isLoad", "isRefresh"])),
    watch: {
        type: function type(val) {
            var _this = this;

            if (!this.isLoad || this.isRefresh) {
                this.$store.commit("SET_DATA");
                $.showPreloader() && this.refresh();
            } else {
                if (this.infiniteOver == "true") $.detachInfiniteScroll($(this.$el));else if (this.infiniteOver == "false") $.attachInfiniteScroll($(this.$el));

                this.$nextTick(function () {
                    $(_this.$refs.content).scrollTop(_this.barPos);
                });
            }
        },
        status: function status(val) {
            var _this2 = this;

            if (!this.isLoad || this.isRefresh) {
                this.$store.commit("SET_DATA");
                $.showPreloader() && this.refresh();
            } else {
                if (this.infiniteOver == "true") $.detachInfiniteScroll($(this.$el));else if (this.infiniteOver == "false") $.attachInfiniteScroll($(this.$el));

                this.$nextTick(function () {
                    $(_this2.$refs.content).scrollTop(_this2.barPos);
                });
            }
        }
    },
    methods: {
        refresh: function refresh() {
            var _this3 = this;

            var Store = this.$store;

            $(this.$refs.content).scrollTop(0);
            $.detachInfiniteScroll($(this.$el));
            Store.commit("SET_INFINITE_STATUS");
            // Store.commit("SET_DATA"); // 为了避免下拉刷新时页面数据被清空，故单独进行处理

            _fetch2.default.getLists(this.type, this.status, function (info) {
                Store.commit("SET_DATA", !info.bizData || info.bizDataCount <= 0 ? [] : info.bizData);

                Store.commit("SET_LOAD_STATUS", true);
                Store.commit("SET_REFRESH_STATUS");

                $.initPullToRefresh($(_this3.$el));

                if (info.bizDataCount >= 0) {
                    if (info.bizDataCount < Store.state.amount) {
                        $.detachInfiniteScroll($(_this3.$el));
                        Store.commit("SET_INFINITE_STATUS", "true");
                    } else {
                        $.attachInfiniteScroll($(_this3.$el));
                        Store.commit("SET_INFINITE_STATUS", "false");
                    }
                }
            });
        },
        infinite: function infinite() {
            var _this4 = this;

            if (this.loading) return false;else {
                var Store = this.$store;
                this.loading = true;

                _fetch2.default.getLists(this.type, this.status, function (info) {
                    if (info.bizData && info.bizDataCount > 0) {
                        Store.commit("SET_DATA", _this4.bizData.concat(info.bizData));
                    }

                    if (info.bizDataCount >= 0 && info.bizDataCount < Store.state.amount) {
                        $.detachInfiniteScroll($(_this4.$el));
                        Store.commit("SET_INFINITE_STATUS", "true");
                    }

                    _this4.loading = false;
                }, this.bizDataCount);
            }
        },
        pass: function pass(item, index) {
            var _this5 = this;

            var result = "3";
            $.promptReason("1", function (val) {
                $.showPreloader("正在审批");
                _fetch2.default.approve(item.instructionNo, item.modifyIndex, _this5.type, result, val, function (info) {
                    $.hidePreloader();

                    if (info.errCode != 0) {
                        $.alert(info.errMsg);
                        return false;
                    }

                    $.toast("已通过");
                    _this5.remove(index);
                    _this5.$store.commit("SET_REFRESH_STATUS", result);
                });
            });
        },
        reject: function reject(item, index) {
            var _this6 = this;

            var result = "4";
            $.promptReason("0", function (val) {
                $.showPreloader("正在审批");
                _fetch2.default.approve(item.instructionNo, item.modifyIndex, _this6.type, result, val, function (info) {
                    $.hidePreloader();

                    if (info.errCode != 0) {
                        $.alert(info.errMsg);
                        return false;
                    }

                    $.toast("已拒绝");
                    _this6.remove(index);
                    _this6.$store.commit("SET_REFRESH_STATUS", result);
                });
            });
        },
        remove: function remove(index) {
            var _this7 = this;

            $(this.$refs.cards[index]).addClass("zoomOutRight").on("animationend webkitAnimationEnd", function () {
                $(_this7.$refs.cards[index]).removeClass("zoomOutRight").off("animationend webkitAnimationEnd");

                _this7.$store.commit("DEL_ITEM", index);
            });
        },
        linkToDetail: function linkToDetail(item) {
            this.$store.commit("SET_CUR_INSTRUCT", item);
            this.$store.commit("SET_POS", this.$refs.content.scrollTop);

            _light2.default.navigate("detail/details");
        },
        onScroll: function onScroll(e, position) {
            this.$parent.quickUp = position.scrollTop >= 300 ? true : false;
        }
    },
    mounted: function mounted() {
        var _this8 = this;

        $(this.$el).scroller({
            type: "auto"
        });

        if (!this.isLoad) {
            this.$store.commit("SET_DATA");
            $.showPreloader() && this.refresh();
        } else {
            this.$nextTick(function () {
                $.initPullToRefresh($(_this8.$el));

                if (_this8.infiniteOver == "true") $.detachInfiniteScroll($(_this8.$el));else if (_this8.infiniteOver == "false") $.attachInfiniteScroll($(_this8.$el));

                $(_this8.$refs.content).scrollTop(_this8.barPos);
            });
        }
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(61)
}
var Component = __webpack_require__(9)(
  /* script */
  __webpack_require__(63),
  /* template */
  __webpack_require__(64),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-e495aa18",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(62);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(8)("7efb5f2a", content, true, {});

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".vux-divider[data-v-e495aa18]{display:table;white-space:nowrap;height:auto;overflow:hidden;font-size:.72rem;line-height:1;text-align:center;padding:10px 0;color:#666}.vux-divider[data-v-e495aa18]:after,.vux-divider[data-v-e495aa18]:before{content:\"\";display:table-cell;position:relative;top:50%;width:50%;background-repeat:no-repeat;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABaAAAAACCAYAAACuTHuKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1OThBRDY4OUNDMTYxMUU0OUE3NUVGOEJDMzMzMjE2NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1OThBRDY4QUNDMTYxMUU0OUE3NUVGOEJDMzMzMjE2NyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU5OEFENjg3Q0MxNjExRTQ5QTc1RUY4QkMzMzMyMTY3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU5OEFENjg4Q0MxNjExRTQ5QTc1RUY4QkMzMzMyMTY3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+VU513gAAADVJREFUeNrs0DENACAQBDBIWLGBJQby/mUcJn5sJXQmOQMAAAAAAJqt+2prAAAAAACg2xdgANk6BEVuJgyMAAAAAElFTkSuQmCC)}.vux-divider[data-v-e495aa18]:before{background-position:right 1em top 50%}.vux-divider[data-v-e495aa18]:after{background-position:left 1em top 50%}", ""]);

// exports


/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//

exports.default = {
    name: "divider"
};

/***/ }),

/***/ 64:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vux-divider"
  }, [_vm._v("我是有底线的")])
},staticRenderFns: []}

/***/ }),

/***/ 65:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('article', {
    directives: [{
      name: "scroll",
      rawName: "v-scroll",
      value: (_vm.onScroll),
      expression: "onScroll"
    }],
    ref: "content",
    staticClass: "content pull-to-refresh-content infinite-scroll",
    attrs: {
      "data-ptr-distance": "56"
    },
    on: {
      "refresh": _vm.refresh,
      "infinite": _vm.infinite
    }
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "list-block cards-list"
  }, [_c('ul', _vm._l((_vm.bizData), function(item, index) {
    return _c('li', {
      key: index,
      ref: "cards",
      refInFor: true,
      staticClass: "card animated"
    }, [_c('div', {
      staticClass: "card-content"
    }, [_c('div', {
      staticClass: "card-content-inner"
    }, [_c('div', {
      staticClass: "item-inner header"
    }, [_c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "start col-56"
    }, [_c('span', {
      staticClass: "label"
    }, [_vm._v("基金：")]), _vm._v(_vm._s(item.fundIdText) + "\n                                ")]), _vm._v(" "), _c('div', {
      staticClass: "end col-44"
    }, [_c('span', {
      staticClass: "label"
    }, [_vm._v("下达人：")]), _vm._v(_vm._s(item.directOperatorText) + "\n                                ")])]), _vm._v(" "), _c('div', {
      staticClass: "row"
    }, [_c('span', {
      staticClass: "order vm"
    }, [_c('i', [_vm._v("序")]), _vm._v(_vm._s(item.instructionNo))]), _vm._v(" "), _c('span', {
      staticClass: "date vm"
    }, [_vm._v(_vm._s(item.date))])])]), _vm._v(" "), _c('div', {
      staticClass: "item-inner item-content"
    }, [_c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "start col-56 up-down"
    }, [_c('span', {
      staticClass: "label mb5"
    }, [_vm._v("组合")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.combiIdText))])]), _vm._v(" "), _c('div', {
      staticClass: "end col-44 up-down"
    }, [_c('span', {
      staticClass: "label mb5"
    }, [_vm._v("业务分类")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.businClassText))])])]), _vm._v(" "), _c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "start col-56 up-down"
    }, [_c('span', {
      staticClass: "label mb5"
    }, [_vm._v("委托方向")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.entrustDirectionText))])]), _vm._v(" "), _c('div', {
      staticClass: "end col-44 up-down"
    }, [_c('span', {
      staticClass: "label mb5"
    }, [_vm._v("证券名称")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.stockName))])])]), _vm._v(" "), (_vm.type == 1) ? _c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "start col-56 up-down"
    }, [_c('span', {
      staticClass: "label mb5"
    }, [_vm._v("触警信息")]), _vm._v(" "), _c('span', [_vm._v("共触发风控\n                                        "), _c('i', {
      staticClass: "risk-count"
    }, [_vm._v(_vm._s(item.triggerRiskCount))]), _vm._v("条")])])]) : _vm._e()]), _vm._v(" "), _c('div', {
      staticClass: "item-inner footer"
    }, [_c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "start col-56 up-down"
    }, [_c('span', {
      staticClass: "label mb5"
    }, [_vm._v("指令数量")]), _vm._v(" "), _c('span', {
      staticClass: "number"
    }, [_vm._v(_vm._s(item.amount))])]), _vm._v(" "), _c('div', {
      staticClass: "end col-44 up-down"
    }, [_c('span', {
      staticClass: "label mb5"
    }, [_vm._v("指令金额")]), _vm._v(" "), _c('span', {
      staticClass: "number"
    }, [_vm._v(_vm._s(item.balance))])])])])])]), _vm._v(" "), _c('div', {
      staticClass: "card-footer no-border"
    }, [(_vm.status == 1) ? _c('a', {
      staticClass: "button button-pass",
      attrs: {
        "href": "javascript:void(0);"
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          $event.preventDefault();
          return _vm.pass(item, index)
        }
      }
    }, [_vm._v("通过")]) : _vm._e(), _vm._v(" "), (_vm.status == 1) ? _c('a', {
      staticClass: "button button-reject",
      attrs: {
        "href": "javascript:void(0);"
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          $event.preventDefault();
          return _vm.reject(item, index)
        }
      }
    }, [_vm._v("拒绝")]) : _vm._e(), _vm._v(" "), (_vm.status == 1) ? _c('a', {
      staticClass: "button button-detail",
      attrs: {
        "href": "javascript:void(0);"
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          $event.preventDefault();
          return _vm.linkToDetail(item)
        }
      }
    }, [_vm._v("详情")]) : _vm._e(), _vm._v(" "), (_vm.status != 1) ? _c('a', {
      staticClass: "button button-detail-full",
      attrs: {
        "href": "javascript:void(0);"
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          $event.preventDefault();
          return _vm.linkToDetail(item)
        }
      }
    }, [_vm._v("查看详情")]) : _vm._e()])])
  }), 0)]), _vm._v(" "), (_vm.isLoad && _vm.bizDataCount == 0) ? _c('div', {
    staticClass: "list-none"
  }, [_c('div', {
    staticClass: "icon-list-none"
  }), _vm._v(" "), _c('div', {
    staticClass: "tc",
    staticStyle: {
      "font-size": "0.7rem",
      "color": "#aaaaaa"
    }
  }, [_vm._v("暂无数据，下拉刷新页面")])]) : _vm._e(), _vm._v(" "), (_vm.hitTheBottom && _vm.hitTheBottom == 'show-preloader') ? _c('div', {
    staticClass: "infinite-scroll-preloader"
  }, [_c('div', {
    staticClass: "preloader"
  })]) : _vm._e(), _vm._v(" "), (_vm.hitTheBottom && _vm.hitTheBottom == 'show-divider') ? _c('divider') : _vm._e()], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "pull-to-refresh-layer"
  }, [_c('div', {
    staticClass: "preloader"
  }), _vm._v(" "), _c('div', {
    staticClass: "pull-to-refresh-arrow"
  })])
}]}

/***/ })

});