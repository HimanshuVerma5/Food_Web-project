import User from "./User";
import UserClass from "./UserClass"
const About=()=>{
return(
<div>
    <h1>About</h1>
    <h2>This is me Himanshu Verma</h2>
    <User
    name={"Akshay Saini"}
    />
    <UserClass
    name={"Himanshu Verma"}
    location={"Kasganj"}/>
</div>
);
};

export default About;