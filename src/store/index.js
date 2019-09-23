import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    pageState: 1,
    pageDescription: '',
    pageData: '',
    studentName: '',
    weekReportId: 1
  },
  mutations: {
    'SET_PAGE_STATE': (state, pageState) => { //eslint-disable-line quote-props
      state.pageState = pageState
    },
    'SET_PAGE_DESCRIPTION': (state, pageDescription) => { //eslint-disable-line quote-props
      state.pageDescription = pageDescription
    },
    'SET_PAGE_DATA': (state, pageData) => { //eslint-disable-line quote-props
      state.pageData = pageData
    },
    'SET_STUDENT_NAME': (state, studentName) => { //eslint-disable-line quote-props
      state.studentName = studentName
    },
    'SET_WEEK_REPORT_ID': (state, weekReportId) => { //eslint-disable-line quote-props
      state.weekReportId = weekReportId
    }
  },
  actions: {
    setPageState: ({ commit }, pageState) => {
      return commit('SET_PAGE_STATE', pageState)
    },
    setPageDescription: ({ commit }, pageDescription) => {
      return commit('SET_PAGE_DESCRIPTION', pageDescription)
    },
    setPageData: ({ commit }, pageData) => {
      return commit('SET_PAGE_DATA', pageData)
    },
    setStudentName: ({ commit }, studentName) => {
      return commit('SET_STUDENT_NAME', studentName)
    },
    setWeekReportID: ({ commit }, weekReportId) => {
      return commit('SET_WEEK_REPORT_ID', weekReportId)
    }
  }
})

export default store
