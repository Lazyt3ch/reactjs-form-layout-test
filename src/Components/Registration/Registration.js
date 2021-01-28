import React, {useState} from 'react';
import "./Registration.css";
import TextInput from "../TextInput/TextInput.js";
import Select from "../Select/Select.js";
import Checkbox from "../Checkbox/Checkbox.js";

const invalidMessage = "Введено некорректное значение";

const languages = [
  "Русский",
  "Английский",
  "Китайский",
  "Испанский"
];

function onChangeHandler(event) {

}

function Registration(props) {
  const textInputData = [
    {
      inputId: "username",
      labelText: "Имя",
      placeholderText: "Введите ваше имя",
      invalidMessage,
      onChangeHandler,
    },
    {
      inputId: "email",
      labelText: "Email",
      placeholderText: "Введите ваше email",
      invalidMessage,
      onChangeHandler,
    },
    {
      inputId: "phone",
      labelText: "Номер телефона",
      placeholderText: "Введите номер телефона",
      invalidMessage,
      onChangeHandler,
    },  
  ];

  const [language, setLanguage] = useState("");

  const selectData = {
    selectId: "language",
    labelText: "Язык",
    initialValue: "Язык",
    languages,
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
          />
        )}

        <Select 
          data={selectData}
        />

        <div className="registration-form-conditions margin-left margin-top">
          <Checkbox 
          
          />

          <div className="checkbox-text">
            Принимаю <a href="www.ya.ru" className="link">условия</a> использования
          </div>
        </div>

      </form>
    </div>
  )
}

export default Registration;