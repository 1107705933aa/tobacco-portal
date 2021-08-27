import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isSpecialDate: false,
        storeData: {},
        hotNewsArr: [],
        introduceArr: [],
        detailMoreArr: [],
        industryArr: [],
        scienceArr: [],
        qualityArr: [],
        mechanismArr: [],
        workArr: [],
        publicArr: [],
        inforArr: [],
    },
    mutations: {
        isBg(state) {
            var date = {
                isDuringDate: function (beginDateStr, endDateStr) {
                    var curDate = new Date(),
                        beginDate = new Date(beginDateStr),
                        endDate = new Date(endDateStr);
                    if (curDate >= beginDate && curDate <= endDate) {
                        return true;
                    }
                    return false;
                }

            }
            state.isSpecialDate = date.isDuringDate('2021/06/29', '2021/07/01');
        }
    }
})
