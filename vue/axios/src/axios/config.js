let baseURL = '';

//自动切换环境
if (process.env.NODE_ENV == 'development'){
  baseURL = 'http://192.168.1.71:3000/';
} else if (process.env.NODE_ENV == 'production') { 
  baseURL = 'https://easy-mock.com/mock/5abaf6659143d1176423ec14/example';
}

export default baseURL;
