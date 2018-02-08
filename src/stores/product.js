/*
* @Author: Administrator
* @Date:   2018-02-06 12:26:03
* @Last Modified by:   Administrator
* @Last Modified time: 2018-02-08 10:34:09
*/
import { action, observable } from 'mobx'
import { get } from '../request/index'
import { productByCategory } from '../constant/api'

class Products {
  @observable product = new Map()
  @action getProductByCategory(id) {
    return new Promise((resolve, reject) => {
      const key = id
      if (this.product.get(key)) {
        resolve()
        return
      }
      const params = {
        id,
      }
      get(productByCategory, params).then((res) => {
        this.product.set(key, res)
        resolve()
      }).catch(reject)
    })
  }
}
export default new Products()
