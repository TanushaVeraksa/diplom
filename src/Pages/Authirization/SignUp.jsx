import {React, useState} from "react";
import './style/authorization.css'
import { registration } from "../../actions/user";
import Input from "./utils/Input"


function SignUp() {
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="authorization">
        <div className="authorization__header">Sign Up</div>
        <Input value={name} setValue={setName} type="text" placeholder="Введите имя..."/>
        <Input value={surname} setValue={setSurname} type="password" placeholder="Введите фамилию..."/>
        <Input value={email} setValue={setEmail} type = "text" placeholder="Введите email..."/>
        <Input value={password} setValue={setPassword} type = "password" placeholder="Введите пароль..."/>
        <button className="authorization__btn" onClick={()=> registration(email, password, name, surname)}>Single Up</button>
    </div>
  );
}

export default SignUp;
