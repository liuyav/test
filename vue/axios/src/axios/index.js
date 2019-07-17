import {get, post} from './request'

// 首页请求
const index = {
  getData() {
    get('/test-axios', {
      timeout: 1000
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
}

const video = {

}

const config = Object.assign({}, index, video);

export default config;


