import React, { Fragment } from 'react'
import { Component } from 'react'
import { Provider } from 'mobx-react'
import { UsersList } from './components/usersList/users.list'
import { UserStore } from './store/users.store'
import AppHeader from './components/header/header'
import Auth from './models/auth'
import {Login} from "./components/login/login";


export class App extends Component<UserStore,Auth> {
  //Inject the userstore 
  private UserStore: UserStore = new UserStore()
  private authFile:Auth=require("./auth/auth.json")
  

  constructor(props){
super(props)
    this.state={
      username:"",
      password:""
    }
  }

  componentDidMount(){
 
  }

 
  render() {
    return (
      <Provider UserStore={this.UserStore}>
        {/* {this.authFile.username===this.props.userAuth.username || this.props.userAuth.password===this.state.password ? <Fragment>
          <AppHeader UserStore={this.UserStore} />
        <UsersList />
          </Fragment> : <Fragment>
          <Login/>
            </Fragment>} */}
             <AppHeader UserStore={this.UserStore} />
        <UsersList />
        
      </Provider>
    )
  }
}
