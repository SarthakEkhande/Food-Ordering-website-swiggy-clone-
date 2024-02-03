import React from 'react'
import User from './User'
import UserClass from './UserClass'

class About extends React.Component{

  constructor(props){
    super(props)

     console.log("parent constuctor");
  }


  componentDidMount(){
    console.log("parent component did renderes");
  }
  render(){
    console.log("parent renders");
    return(
      <div>
        <h1>This is About class Component</h1>
      <User name={"Sarthak Ekhande(function)"}/>
        
      {/* <UserClass  name={"Sarthak Ekhande(class)"} location={"sangmner"} /> */}
      {/* <UserClass  name={"Akshay Saini(class)"} location={"sangmner"} /> */}
    </div>
    )
  }
}


export default About