/*
* @Author: Administrator
* @Date:   2018-02-06 12:26:03
* @Last Modified by:   Administrator
* @Last Modified time: 2018-02-06 12:35:19
*/
import { action, observable } from 'mobx'

class User {
  @observable count = 0
  @action change() {
    this.count += 1
  }
}
export default new User()
