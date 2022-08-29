import React from "react";
import UserName from "./UserName";

const UserGreeting = () =>{
    const userObject={
        title: 'Mrs',
        favColor:"Indigo",
        location:"GoodYear"
    }
    const favFoods= ["apples", "oranges", "pizza"]    
    return(
        <div>
            Welcome
            <UserName favFoods={favFoods} user={userObject} title="Mrs." favColor="Indigo"/>
        </div>

    )


}

export default UserGreeting;