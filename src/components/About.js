import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import { Component } from "react";
import userContext from "./utils/userContext";



class About extends Component {
    constructor(props){
        super(props);
        
        //console.log("parent - constructor")
    }
    componentDidMount(){
        //Best place to make an Api call
        
        //console.log("Parent- componentDidMount")

    }
    render(){
        //console.log("Parent- render")
    return(
        <div >
            
            <h1>About page</h1>
        <p>
            {" "}
            This is The Namaste React Live Course
         </p>
         <h1>About page</h1>
        <p>
            {" "}
            This is The Namaste React Live Course
         </p>
         <h1>About page</h1>
        <p>
            {" "}
            This is The Namaste React Live Course
         </p>
         <userContext.Consumer>
                {({user}) => (<h4>{user.name} -{user.email}</h4>)}
        </userContext.Consumer>
         <h1>About page</h1>
        <p>
            {" "}
            This is The Namaste React Live Course
         </p>
         <ProfileClass name = {"firstClass"} />

        </div>
       
    );
 }
}

export default About;