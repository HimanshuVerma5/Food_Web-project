import { useState } from "react";

const User=({name})=>{
  const [count,setCOunt]=useState(0);
  const[count2]=useState(1);
return(
<div className="user-card">
  <h2>Count:{count}</h2>
  <h2>Count2:{count2}</h2>
  <h3>Name:{name}</h3>
  <h3>Location:Kasganj</h3>
  <h4>Contact:i_am_h.verma</h4>
</div>

)}
export default User;