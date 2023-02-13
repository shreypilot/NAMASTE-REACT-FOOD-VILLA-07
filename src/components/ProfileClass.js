
import React, { Component } from 'react'

class ProfileClass extends Component {

  constructor(props){
    super(props);
    //create state
    this.state ={
      userInfo: {
          name: "Dummy name",
          location: "dummy location",
      },
  };
    console.log("child-Constructor" + this.props.name)//first constructor call
  }/**
   *  async componentDidMount(){
      const data = await fetch("https://api.github.com/users/shreypilot");
      const json = await data.json();
      console.log(json);
      this.setState({
        userInfo : json,
      });
    console.log("child-componentDidMount" + this.props.name)
  }
   */
   componentDidMount(){
      this.timer = setInterval(()=>{
        console.log("Namaste React op");
      },1000)
    //console.log("child-componentDidMount" + this.props.name);
  }

  componentDidUpdate(prevProps ,prevState){
    /**
     * if(
      this.state.count != prevState.count //how will you do dependency array in class component
    ){
      //code
      //their such a complicated code to do this
    }
    ifif(
      this.state.count2 != prevState.count2 //how will you do dependency array in class component
    ){
      //code
      //their such a complicated code to do this
    }
     */
    
    
    //console.log("component Did update");
  }
  componentWillUnmount(){
    clearInterval(this.timer);
    console.log("componenetwillunmount")
  }
  render() {
    const {count} = this.state;
    const {count2} = this.state;
    console.log("child-render" + this.props.name);
    return (
      <div>
        <h1>ProfileClass</h1>
        <img src={this.state.userInfo.avatar_url} />
        <h2>Name: {this.state.userInfo.name}</h2>
        <h2>Location: {this.state.userInfo.location}</h2>
        
        <button onClick={() =>{
          //we do not mutate state directly
          //never do this.state = something
          this.setState({
            count : 1,
            count2 : 2,
          });
        }}
        >
          SetCount
        </button>
      </div>
    )
  }
}

export default ProfileClass

/**
 * parent constructor
 * parent render
 * child constructor 
 * child render
 * parent componentDidMount
 * Dom is updated
 * json is logged in console
 * 
 */