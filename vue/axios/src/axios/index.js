import {get, post} from './request'

// 首页请求
const index = {
  getData() {
    get('/api/user', {
      timeout: 1000
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  },

  sendData() {
    post('/api/login', {name: "xm2", sex: "man"}).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  },

  saveArticleCont(data) {
    post('/api/article/add', data).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  },

  modifyArticleCont(data) {
    return new Promise((resolve, reject) => {
      post('/api/article/modify', data).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
    
  }
}

const video = {

}

const config = Object.assign({}, index, video);

export default config;


