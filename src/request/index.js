/*
* @Author: Administrator
* @Date:   2018-02-07 09:48:53
* @Last Modified by:   Administrator
* @Last Modified time: 2018-02-07 14:17:45
*/
import axios from 'axios'

export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      url,
      params,
    })
      .then((res) => {
        if (res.status === 200) {
          resolve(res.data)
        } else {
          reject(res)
        }
      }).catch((e) => {
        console.log(e)
      })
  })
}
export default ''
