import React, {useState} from 'react';
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



function onChangeHandler(event) {

}

function Registration(props) {
  const [language, setLanguage] = "";

  const selectData = {
    selectId: "language",
    labelText: "Язык",
    initialValue: "Язык",
    // options: ["Язык", ...languages], // 0th element is not a language
    options: languages,
    language,
    setLanguage,
  };

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
            key={data.inputId}
            data={data}
            invalidMessage={invalidMessage}
            onChangeHandler={onChangeHandler}
          />
        )}

        <Select 
          data={selectData}
        />

      </form>
    </div>
  )
}

export default Registration;