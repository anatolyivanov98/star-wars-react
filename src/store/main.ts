import { makeAutoObservable } from 'mobx'

class Main {
  isLoader: boolean = true
  constructor () {
    makeAutoObservable(this)
  }

  setLoader (value: boolean): void {
    this.isLoader = value
  }
}

export default new Main()
