import axios  from "axios"
import { useState } from "react"


const LoginComponent =  () =>{
    const [Username,setUsername] = useState("")
    const [Password,setPassword] = useState("")
   
    const InputUsername = (event)=>{
        setUsername(event.target.value)
    }
    const InputPassword = (event)=>{
        setPassword(event.target.value)
    }
    const SubmitOnLogin = async (event) =>{
        event.preventDefault();
        const results =  await axios.get('http://localhost:4000')
        const data = results.data
        const ar = data.find(x => x.username ===  Username)
        if (Username === ar.username )  {
            if (ar.password !== Password) {

              console.log("PASSWORD FAIL")
              alert("PASSWORD FAIL")
            } else {
              console.log("SUCCESS")
              alert("SUCCESS เข้ามาสำเร็จ ")
            }
          }else {
            console.log("USERNAME FAIL")
            alert("USERNAME FAIL")
          }
        };
    
    
return(
    <div align = "center">
        <form onSubmit={SubmitOnLogin}>
        <div >
        <label>Username</label>
        <input type="text" name="usr" required onChange={InputUsername}/><br/>
        <label>Password</label>
        <input type="password" name="pass"  required onChange={InputPassword}/>
        </div>
        <input type="submit" value="Login"></input>
        </form>
    </div>
)

}
export default LoginComponent