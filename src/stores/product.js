/*
* @Author: Administrator
* @Date:   2018-02-06 12:26:03
* @Last Modified by:   Administrator
* @Last Modified time: 2018-02-07 16:38:04
*/
import { action, observable } from 'mobx'

class User {
  @observable product = new Map()
  @action getProductsByCategory() {

  }
}
export default new User()
