import axios from './index'
export const getUserInfo = ({ userId }) => {
  return axios.request({
    url: '/getUser',
    method: 'post',
    data: {
      userId
    }
  })
}
