import {useState} from 'react'
// import { useNavigate } from "react-router-dom";
import axios  from "axios"
const RegisterAr = () =>{
    const [Username,setUser] = useState('')
    const [Pass,setPass] = useState(0)
    const [Email,setEmail] = useState('')
    const [Firstname,setFirstname] = useState('')
    const [Lastname,setLastname] = useState('')
    const [Age,setAge] = useState('')
    const [db,setDb] = useState('')
    const InputUser = (event)=>{
        setUser(event.target.value)
    }
    const InputPass =(event)=>{
        setPass(event.target.value)
    }
    const InputEmail =(event)=>{
        setEmail(event.target.value)
    }
    const InputFirstname =(event)=>{
        setFirstname(event.target.value)
    }
    const InputLastname =(event)=>{
        setLastname(event.target.value)
    }
    const InputAge =(event)=>{
        setAge(event.target.value)
    }
    // const Inputdb = async (dbar) =>{
    //     dbar = await axios.post('http://localhost:4000/register',db).then(res => {
    //     console.log(res.data)})
    // }
    const SubmitRegister =  async (event) => {
        event.preventDefault();
        const database ={
            id:"1",
            username :'',
            password : 0,
            email : '',
            firstname: '',
            lastname: '',
            age:''}
            database.username = Username;
            database.password = Pass;
            database.email = Email;
            database.age  = Age;
            database.firstname = Firstname;
            database.lastname = Lastname;
        console.log(database)
        await setDb(database)
        alert("Succes Register")
        axios.post('http://localhost:4000/register',database).then(res => {
        console.log("Connected = "+JSON.stringify(res.data))})
        
        }
        
return(
    <div align = "center">
            <form onSubmit={SubmitRegister}>
        <div>
        <label> USERNAME</label>
        <input type="text" name="uname" onChange={InputUser} />
        </div>
       <div>
       <label> PASSWORD</label>
          <input type="password" name="pass" onChange={InputPass} />
       </div>
       <div>
        <label>EMAIL</label>
        <input type="text" name="Email" onChange={InputEmail} />
        </div>
        <div>
        <label>Firstname</label>
        <input type="text" name="Fristname" onChange={InputFirstname} />
        </div>
        <div>
        <label>Lastname</label>
        <input type="text" name="Lastname" onChange={InputLastname} />
        </div>
        <div>
        <label>AGE</label>
        <input type="text" name="Age" onChange={InputAge} />
        </div>
       <input type="submit" value="Register"></input>
          </form>
          
    </div>
)
}
export default RegisterAr