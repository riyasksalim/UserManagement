import React, { Fragment } from 'react';
import { Component } from 'react';
import { observer, inject } from 'mobx-react';

import { UserProps } from '../../models/props';
import Auth from '../../models/auth';

@inject('UserStore')
@observer
export class Login extends Component<UserProps, Auth> {

    constructor(props) {
        super(props);
        this.state = new Auth();


    }



    render() {

        return (
            <Fragment>
                <form action="action_page.php" method="post">
                    <div className="imgcontainer">
                        <img src="img_avatar2.png" alt="Avatar" className="avatar" />
                    </div>

                    <div className="container">
                        <label ><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" onChange={(e)=>{
                            this.setState({
                                username:e.target.value
                            })
                        }} required  />

                        <label ><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required  onChange={(e)=>{
                            this.setState({
                                password:e.target.value
                            })
                        }} />

                        <button type="submit" onClick={()=>{
                                this.props.UserStore.SetUser(this.state)
                        }}>Login</button>

                    </div>

                    <div className="container" >
                        <button type="button" className="cancelbtn">Cancel</button>
                        <span className="psw">Forgot <a href="#">password?</a></span>
                    </div>
                </form>
            </Fragment>
        )
    }
}

