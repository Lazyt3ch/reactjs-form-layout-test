import React from 'react';
import "./Registration.css";
import TextInput from "../TextInput/TextInput.js";
import Select from "../Select/Select.js";

const invalidMessage = "Введено некорректное значение";

const textInputData = [
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

const languages = [
  "Русский",
  "Английский",
  "Китайский",
  "Испанский"
];

const selectData = {
  inputId: "language",
  labelText: "Язык",
  defaultText: "Язык",
  options: languages,
};

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

        {textInputData.map((data) => 
          <TextInput
            data={data}
            invalidMessage={invalidMessage}
            onChangeHandler={onChangeHandler}
          />
        )}

        <Select 
          data={selectData}
          invalidMessage={invalidMessage}
          onChangeHandler={onChangeHandler}          
        />

      </form>
    </div>
  )
}

export default Registration;