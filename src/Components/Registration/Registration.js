import React from 'react';
import "./Registration.css";
import Input from "../Input/Input.js";

const inputData = [
  {
    inputId: "username",
    labelText: "Имя",
    placeholderText: "Введите ваше имя",
  },
  {
    inputId: "email",
    labelText: "Email",
    placeholderText: "Введите ваше email",
  },
  {
    inputId: "phone",
    labelText: "Номер телефона",
    placeholderText: "Введите номер телефона",
  },  
];

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

        {inputData.map((data) => 
          <Input
            data={data}
            onChangeHandler={onChangeHandler}
          />
        )}

      </form>
    </div>
  )
}

export default Registration;