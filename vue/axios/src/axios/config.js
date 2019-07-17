let baseURL = '';

//自动切换环境
if (process.env.NODE_ENV == 'development'){
  baseURL = 'https://easy-mock.com/mock/5abaf6659143d1176423ec14/example';
} else if (process.env.NODE_ENV == 'production') { 
  baseURL = 'https://easy-mock.com/mock/5abaf6659143d1176423ec14/example';
}

export default baseURL;
