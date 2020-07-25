import * as React from "react"
import { User } from "../../models/users";
import { AppEnum } from "../../enums/app.enums";
import { UserStore } from "../../store/users.store";



interface UserModel {
    params: User,
    userStore: UserStore,
    showDetails(_User: User)
}


const UserComponent: React.SFC<UserModel> = (props) => {
    return (
        <React.Fragment>
            {/* User section */}
            <div className="col-lg-3 col-md-4 col-sm-12 showHand">
                <div title={props.params.username}
                    className={"card"}>
                    <img onClick={() => {
                        props.showDetails(props.params)
                    }} style={{ width: "100%", height: "300px" }} src={props.params?.picture.large == "" ? AppEnum.defaultThumb : props.params.picture.large} alt="" />
                    <div className="card-block cardblockshadow">
                        <p className="card-title cut-text" >{props.params.username}</p>
                        <p className="card-text" onClick={() => {
                        props.showDetails(props.params)
                    }}>Show details</p>
                      
                    </div>
                </div>
            </div>
        </React.Fragment>

    )
}

export default UserComponent