import React from "react";
//import {Greeting} from "./components/greeting/Greeting";
import { Routes } from "./routes/Routes";
import { UserProvider} from "./shared/provider/UserProvider";
import {DesktopNavigation} from "./components/navigation/desktopNavigation/DesktopNavigation";
import "./shared/css/Global.css";
// eslint-disable-next-line 
import { JsxEmit } from "typescript";




// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App()  {  
    return (
        <UserProvider>
            <Routes>
                <DesktopNavigation/>
            </Routes>
        </UserProvider>
    );
}

export default App;
