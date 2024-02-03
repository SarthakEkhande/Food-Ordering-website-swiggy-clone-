import React from "react"

class UserClass extends React.Component{
    

    constructor(props){
        super(props)

        this.state={
            userinfo:{
                name:"dummyname",
                location:"default",
                avatar_url:"dummy photo.com"
            }
        }
    //  console.log(props);
    //  this.state={
    //      count:0,
    //      count1:1
     }
     
    //  console.log("child constuctor");

    
    async componentDidMount(){
        console.log("child component did renderes");

        //Make Api calls
        const data=await fetch("https://api.github.com/users/sarthakekhande")
        const json=await data.json();

        this.setState({
            userinfo:json,
        })
        console.log(json);
      

        
      }

      componentDidUpdate(){
          console.log("component didupdate");
      }

      componentWillUnmount(){
          console.log("Unmount called");
      }
    render(){
        // const{name,location}=this.props
        // const {count,count1}=this.state

        console.log("child render");


        const{name, location,avatar_url}=this.state.userinfo;
        // debugger;
        return(

            
            <div className="p-10 m-10 px-4 justify-center left-7 ">

            {/* <h1>count:{count }</h1>
            <h1>count:{count1}</h1>
            <button onClick={()=>{
                // this.state.count=this.state.count+1
                //Never use state variable directly
                this.setState({
                   count:  this.state.count + 1
                    })
            }}>ADD</button> */}
            {/* <button  onClick={()=>{
                // this.state.count=this.state.count+1
                //Never use state variable directly
                this.setState({
                   count:  this.state.count -1 
                    })}}>Sub</button> */}
            <h2 className="font-bold font-serif text-3xl justify-center">Name: {name}</h2>
            <h2 className=" font-serif text-xl left-2/4 justify-center">Frontend Developer</h2>
            <img className="w-[250]  boder border-black-100" src={avatar_url}></img>
            <h3>Location: {location}</h3>
            <h4>Contact: 9764135683</h4>
    
            </div>
        )  
    }
}

export default UserClass