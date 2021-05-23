import React, {useState} from 'react';
import './style/authorization.css'
import Input from "./utils/Input"
import {useDispatch} from "react-redux";
import {login} from "../../actions/user";
import {logout} from "../../reducers/userReducer"
import {useSelector } from "react-redux";

function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  const isAuth = useSelector(state => state.user.isAuth)

    return (
      <div className="authorization">
          <div className="authorization__header">Sign In</div>
            <Input value={email} setValue={setEmail} type="text" placeholder="Введите email..."/>
            <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль..."/>
            <button className="authorization__btn" onClick={() => dispatch(login(email, password))}>Войти</button>
           {isAuth && <button className="authorization__btn" onClick={() => dispatch(logout())}>Выйти</button>} 
      </div>
    );
}

export default SignIn
