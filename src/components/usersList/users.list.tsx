import React, { Fragment } from 'react';
import { Component } from 'react';
import { observer, inject } from 'mobx-react';

import { User } from '../../models/users';
import UserComponent from '../books/book';
import NoUser from '../noUsersFound/nousersfound'
import { AppEnum } from '../../enums/app.enums';
import { UserProps } from '../../models/props';
@inject('UserStore')
@observer
export class UsersList extends Component<UserProps, User> {
    usersList: User[];
    bookBorderstyle = {}
    constructor(props) {
        super(props);
        this.state = new User();
        //get all the users from the library.
        this.props.UserStore.getAllUsers();
    }
    toggleBookDetail = () => {
        document.getElementById("bookDetailModel").click();
    }
    render() {
        let filteredUsers = this.props.UserStore.filteredUsersList;
        return (
            <Fragment>
                {/* book List area */}
                <div className="container">
                    <div className="row">
                        {
                           
                            filteredUsers.length > 0 ? (
                                this.props.UserStore.filteredUsersList.map((user, idx) => (
                                    user ?
                                        <UserComponent
                                            params={user}
                                            userStore={this.props.UserStore}
                                            key={idx}
                                            showDetails={(user: User) => { this.setState(user, () => { this.toggleBookDetail() }); }} /> : ""
                                ))) : (<NoUser />)
                        }
                    </div>
                </div>

                {/* selected User details area */}
                <button type="button" style={{ display: "none" }} className="btn btn-info btn-lg" data-toggle="modal" id="bookDetailModel" data-target="#myModal">Open Modal</button>
                <div id="myModal" className="modal fade bd-example-modal-lg" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <p>gender: {this.state.gender}</p>
                                     
                                    </div>
                                    <div className="col-sm-6 text-right">
                                        {/* <img className="image3d" src={this.state.picture.medium ? this.state.picture.thumbnail : AppEnum.defaultThumb} alt="sans"  width="200px" /> */}
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>

                    </div>
                </div>

            </Fragment>
        )
    }
}

