import React from "react";

class UserClass extends React.Component{
  constructor(props){
    super(props);

  this.state={
    userInfo:{
      name:"Dummy",
      location:"Default",
      avatar_url:"https//dummyphoto.com",
      bio:"not found"
    },
  };
  }
  async componentDidMount(){
   const data=await fetch("  https://api.github.com/users/HimanshuVerma5");
   const json=await data.json();
   console.log(json);

   this.setState({
    userInfo:json,
   })
}
    render(){
       const{name,location,avatar_url,bio}=this.state.userInfo;
    return(
        <div className="user-card">
             <img src={avatar_url} alt="" />
            <h2>Name:{name}</h2>
            <h3>Location:{location}</h3>
            <h4>bio:{bio}</h4>

        </div>
    )
}
}
export default UserClass;