import React from "react";


const UserName = (props) =>{
    return(
        <div>
            {props.title} Oneida
            I heard you like {props.favColor}
            <ol>
                <li>
                    {props.user.title}
                </li>
                <li>
                    {props.user.favColor}
                </li>
                <li>
                    {props.user.location}
                </li>

              {props.favFoods.map((food)=>{
                return (<li>{food}</li>)
              })}
            </ol>
        </div>
    )

}

export default UserName;