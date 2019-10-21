import axios from 'axios'

const apiUrl = '/api'

export default {
  searchMovies(params) {
    return axios.get(`${apiUrl}/movies/`, {
      params,
    })
  },
  signUp(params) {
    return axios.post(`${apiUrl}/auth/signup/`, {
      user: params,
    })
  },
  getAllUsers() {
    return axios.get(`${apiUrl}/auth/allUsers/`).then((result) => {
      return result.data
    });
  },

  getallnotices(){
    return axios.get(`${apiUrl}/allnotices/`).then((result) => {
      return result.data
    });
  },

  noticewrite(params){
    return axios.post(`${apiUrl}/notice/`, {
      params,
    })
  },

  getallboards() {
    return axios.get(`${apiUrl}/allboards/`).then((result) => {
      return result.data
    });
  },

  boardwrite(params){
    console.log('api index.js')
    return axios.post(`${apiUrl}/board/`, {
      params,
    })
  },

  getboarddetail(params){
    console.log(params)

    
  }
}