import { observable, action } from 'mobx'
import { User } from '../models/users';
import { AppEnum } from '../enums/app.enums';
import Auth from '../models/auth';



export class UserStore {
  @observable usersList: User[] = [];
  @observable filteredUsersList: User[] = []

  @observable userAuth: Auth



  constructor() {

    //  this.getAllUsers();

  }
  @action
  getAllUsers = async () => {
    debugger
    if (JSON.parse(localStorage.getItem("users"))?.length > 0) {
      this.usersList = JSON.parse(localStorage.getItem("users"));
      this.filteredUsersList = this.usersList
   
    }
    else {
      let users:any = await this.getUsers();
      this.usersList = users;
      this.filteredUsersList = this.usersList
      localStorage.setItem("users",JSON.stringify(this.usersList))
    }

  }


  getUsers() {

    let _this = this;
    return new Promise((resolve, reject) => {
      fetch(AppEnum.apiUrl).then(response => response.json()).then((data) => {

        for (let index = 0; index < data.results.length; index++) {
          const element = data.results[index];
          _this.usersList.push(element.user)

        }
        resolve(this.usersList);
      }).catch((err) => {
        reject(err)
      })
    })
  }


  @action
  setFilteredUsers(Users: User[]) {
    //Fill the users according to the filter constrains
    this.filteredUsersList = Users;
  }

  @action
  SetUser(Users: Auth) {
    //Fill the users according to the filter constrains
    this.userAuth = Users;
  }

  @action
  AddUser(_user: User) {
    debugger

    var localusers=JSON.parse(localStorage.getItem("users"));
    var user=localusers[0];
    user.username=_user.username;
    user.email=_user.email;
    user.password=_user.password;
    user.picture.large="https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg"
    localusers.push(user);
    this.usersList.push(user);
    //this.filteredUsersList.push(user)
  }
}

export const userStore = new UserStore()
