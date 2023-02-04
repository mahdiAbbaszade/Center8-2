import { makeAutoObservable } from 'mobx'
import { message } from 'antd'
import Api from '../../../api/request/api'


export default class EstablishedController {
  List = []
  items = {
      photos:{
      }
  }


  constructor() {
    makeAutoObservable(this)
  }

  sendImage = (route , data , name ) => {
    Api.post(route , data)
      .then((response) => {
          console.log(response.data.fileName)
          this.items.photos[`${name}`] = response.data.filename
          console.log(this.items)
      })
      .catch((error) => {
        console.log(error)
      })
  }
    sendData = (route ) => {
    Api.post(route , {collageOwner : this.items})
      .then((response) => {
          console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }


}
