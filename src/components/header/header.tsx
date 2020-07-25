import * as React from "react"
import { inject, observer } from "mobx-react";
import { AppEnum } from "../../enums/app.enums";
import { Fragment } from "react";
import { UserProps } from "../../models/props";
import { User } from "../../models/users";


const AppHeader: React.SFC<UserProps> = (props) => {

    const [user, setUser] = React.useState(new User());
    const filterList = event => {
        let users = props.UserStore.usersList;
        let value = event.target.value.toLowerCase();
        let filterUsers = users.filter((book) => { return book.username.toLowerCase().includes(value) });
        props.UserStore.setFilteredUsers(value == "" ? props.UserStore.usersList : filterUsers);
    }


    const addUser = event => {
        props.UserStore.AddUser(user);
        document.getElementById("box").click()
    }

    const setvalue=(e)=>{
        setUser({
            ...user, 
            [e.target.id]: e.target.value
        });
    }

  

    return (

        <Fragment>
            <nav className="navbar navbar-expand-md navbar-dark bg-success bg-dark sticky-top">
                <a className="navbar-brand" id="heading">{AppEnum.appHeading}</a>
                <div className="col-sm-3 col-md-3 pull-right">
                    <form className="navbar-form" role="search">
                        <div className="input-group">
                            <input type="text" className="form-control" onChange={(e) => { filterList(e) }} placeholder="Search user name" name="srch-term" id="srch-term" />

                            <div className="input-group-btn">
                                <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search"></i></button>
                            </div>
                        </div>
                    </form>

                </div>
               
                 <button type="button" className="btn btn-primary" data-toggle="modal" id="box" data-target="#exampleModal" data-whatever="@mdo">Add User</button>

            </nav>

            
           
                <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Add User</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label className="col-form-label"> Name:</label>
                                        <input type="text" value={user.username}  className="form-control" onChange={(e) =>setvalue(e)}  id="username" />
                                    </div>
                                    <div className="form-group">
                                        <label className="col-form-label">Email:</label>
                                        <input type="text" value={user.email} className="form-control" onChange={(e) => setvalue(e)}  id="email" />
                                    </div>
                                    <div className="form-group">
                                        <label className="col-form-label">Password:</label>
                                        <input type="text" value={user.password} onChange={(e) => setvalue(e)} className="form-control"  id="password" />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={(e)=>{
                                    addUser(e);
                                }}>Save User</button>
                            </div>
                        </div>
                    </div>
                </div>
        </Fragment>
    )
}

export default inject('UserStore')(observer(AppHeader))