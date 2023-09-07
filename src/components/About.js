import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component{
    constructor(props){
        super(props);
        // console.log("Parent consturctor");
    }

    componentDidMount(){
        // console.log("Parent component did mount");
    }

    componentDidUpdate(){
        // console.log("Parent component did update")
    }

    componentWillUnmount(){
        // console.log("Parent component will unmount");
    }


    render(){
        // console.log("Parent render method")
        return(
            <div>
            {/* <User name={"Pradnesh"} location={"Bangalore"}/> */}

            <br></br>

            <UserClass name={"Pradnesh"} username={"pradneshbhike"}/>
        </div>
        )
    }
}


// const About = () => {
//     return (
//         <div>
//             <User name={"Pradnesh"} location={"Bangalore"}/>

//             <br></br>

//             <UserClass name={"Akshay"} location={"Mumbai"}/>
//         </div>
//     );
// };

export default About;