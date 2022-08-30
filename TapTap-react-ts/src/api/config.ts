import axios from 'axios'  


export const baseURL = "http://localhost:3500"   
// axios的实例及拦截配置   
const axiosInstance = axios.create({
    baseURL
})   
// 只拦截响应的时候   
axiosInstance.interceptors.response.use(
    res => res.data,
    err => {
        console.log(err,'网络错误')
    }
)

export { axiosInstance }