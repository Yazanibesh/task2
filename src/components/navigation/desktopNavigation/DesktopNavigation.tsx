
import React from "react";
import { useContext} from "react";
import { UserContext} from "../../../shared/provider/UserProvider";
import "./DesktopNavigation.css";
import Logotype from "../../../shared/images/logotype.svg"; 
import { useHistory } from "react-router-dom";
import RoutingPath from "../../../routes/RoutingPath";
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const  DesktopNavigation = () => {
    const history = useHistory();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [authUser, setAuthUser] = useContext(UserContext);
    const displaySignInButtomOrUsernameDepandingOnAuthentication = () =>{
        return authUser
            ? authUser.username
            : <span onClick={ () => history.push(RoutingPath.signInView)}>Signin</span>;

        
    };

    return (
        <div className = "desktopNavigationWrapper">
            <img className = "navigationLogotype"
                src = { Logotype }
                alt = {" "} />

            <span onClick = {() => history.push(RoutingPath.homeView)}>Products</span>
            <span onClick = {() => history.push(RoutingPath.homeView)}>Brands</span>
            <span onClick = {() => history.push(RoutingPath.homeView)}>News</span>
            <span onClick = {() => history.push(RoutingPath.homeView)}>Guidline</span>
            <span onClick = {() => history.push(RoutingPath.signInView)}>Sign in</span>
            {displaySignInButtomOrUsernameDepandingOnAuthentication()}
            
        </div>
    );
};