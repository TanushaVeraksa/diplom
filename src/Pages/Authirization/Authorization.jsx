import React from 'react'
import "./style/main.css"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import {useSelector } from "react-redux";

function Authorization() {
    const isAuth = useSelector(state => state.user.isAuth)
    return (
        <div className = "auth-style">
            <SignIn />
            {!isAuth && <SignUp />}
        </div>
    )
}

export default Authorization
