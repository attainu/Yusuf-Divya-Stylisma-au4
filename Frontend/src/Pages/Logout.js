/*eslint-disable*/

import React from "react";
import {Redirect} from "react-router-dom";

class Logout extends React.Component {
    render() {
        localStorage.removeItem("JWT");
        
        return (
            <div> 
                {<Redirect to ="/login"/>}
            </div>
        );
    }
}

export default Logout