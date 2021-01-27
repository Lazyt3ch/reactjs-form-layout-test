import React from 'react';
import "./Registration.css";
import Input from "../Input/Input.js";

function onChangeHandler(event) {

}

function Registration(props) {
  return (
    <div className="registration-form-container">
      <form action="" className="registration-form">
        <div className="registration-form-header margin-left">
          <p className="registration-form-title">Регистрация</p>
        </div>
        <div className="registration-form-text margin-left">
          {/* <span>Уже есть аккаунт?</span> <a href="#">Войти</a> */}
          <span>Уже есть аккаунт?</span> <span>Войти</span>
        </div>

        <Input 
          labelText="Имя"
          inputId="username"
          placeholderText="Введите Ваше имя"
          onChangeHandler={onChangeHandler}
        />

      </form>
    </div>
  )
}

export default Registration;