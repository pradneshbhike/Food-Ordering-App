import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "dummy",
            location: "dummy"
        };
    }

    async componentDidMount(){
        // console.log(this.props.name +" Child component did mount");
        const userDataAPI = await fetch("https://api.github.com/users/"+this.props.username);
        const userData = await userDataAPI.json();
        // console.log(userData);
        this.setState(userData);
    }

    componentDidUpdate(){
        // console.log("component did update called");
    }

    componentWillUnmount(){
        // console.log("component will unmount called");
    }

    render(){
        // console.log(this.props.name +" child render method");
        const { name, location, company, avatar_url } = this.state;
        // const { count, count2 } = this.State;
        return(
            <div>
                
                <img className="w-20 h-20"alt="res-logo" src={avatar_url}></img>
                <h1>{name}</h1>
                <h1>{company}, {location}</h1>

                {/* <UserContext.Consumer>{userName.loggedInUser}</UserContext.Consumer> */}

            </div>
        )
    }
} 

export default UserClass;