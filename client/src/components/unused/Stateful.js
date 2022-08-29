import React from "react";
import axios from "axios";

// or React.component
class Stateful extends React.Component{
constructor(props){
    super(props);
this.state={
    title:"",
    actors:"",
    genre:""

}
}

componentDidMount(){
    // var self = this;

    axios({
        method: 'get',
        url: `http://localhost:8080/api/userinfo`,
        withCredentials: false
      })
    .then(function (response) {
      // handle success
      console.log(response);
    //   self.setUserInfo({
    //     title:response.data.Title,
    //     actors:response.data.Actors,
    //     genre:response.data.Genre
    //   })
    //   alert(this.state.title)
    })

}



render(){
    return(
        <div>
          <h1>  This is stateful </h1>
        </div>
    )
}



}

export default Stateful;