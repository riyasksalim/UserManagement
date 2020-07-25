import * as React from "react"
import { AppEnum } from "../../enums/app.enums"

const NoUser: React.SFC = () => {
    return (
        <div id="main">
            <div className="fof">
                <h1>{AppEnum.noUsersFound}</h1>
            </div>
        </div>
    )
}

export default NoUser