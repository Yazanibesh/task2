import React from "react" 
import "./DesktopNavigation.css"
import Logotype from "../../../shared/images/logotype.svg";
import {useHistory} from "react-router-dom"
import RoutingPath from "../../../routes/RoutingPath";

export const DesktopNavigation = () => {
    const history = useHistory ()
    return (
        <div className= "desktopNavigationWrapper">
            <img className="navigationLogoType"
                src={Logotype}
                alt={""} />
                <span onClick = {() => history.push(RoutingPath.homeView)}>Prdoucts</span>
                <span onClick = {() => history.push(RoutingPath.signInView)}>Sign in</span>
        </div>


    );



};