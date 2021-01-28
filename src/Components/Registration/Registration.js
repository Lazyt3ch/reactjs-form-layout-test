import React, {useState, useEffect} from 'react';
import "./Registration.css";
import TextInput from "../TextInput/TextInput.js";
import Select from "../Select/Select.js";
import Checkbox from "../Checkbox/Checkbox.js";
import Submit from "../Submit/Submit.js";
import validate from "../../utils/validators.js";

const invalidMessage = "Введено некорректное значение";

const languages = [
  "Русский",
  "Английский",
  "Китайский",
  "Испанский"
];

function onChangeHandler(event) {
  const {value, id} = event.target;
  return validate(value, id);
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
      placeholderText: "Введите ваш email",
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

  const textInputValidities = useState({
    username: false,
    email: false,
    phone: false,
  });

  const [language, setLanguage] = useState("");

  const selectData = {
    selectId: "language",
    labelText: "Язык",
    initialValue: "Язык",
    languages,
    language,
    setLanguage,
  };

  const [termsAccepted, setTermsAccepted] = useState(false);

  // eslint-disable-next-line
  const [isSubmitReady, setIsSubmitReady] = useState(false);



  const submit = () => {

  };

  return (
    <div className="registration-form-container">
      <form action="" className="registration-form">

        <div className="registration-form-header margin-left">
          <p className="registration-form-title">Регистрация</p>
        </div>

        <div className="registration-form-text margin-left">
          {/* Remember to replace the dummy link! */}
          <span>Уже есть аккаунт?</span> <a href="www.ya.ru" className="link">Войти</a>
        </div>

        {textInputData.map((data) => 
          <TextInput 
            key={data.inputId} 
            data={data}
            isValid={textInputValidities[data.inputId]}
          />
        )}

        <Select 
          data={selectData}
        />

        <div className="registration-form-terms margin-left margin-top">
          <Checkbox 
            termsAccepted={termsAccepted}
            setTermsAccepted={setTermsAccepted}          
          />

          <div className="checkbox-text">
            {/* Remember to replace the dummy link! */}
            Принимаю <a href="www.ya.ru" className="link">условия</a> использования
          </div>
        </div>

        <Submit 
          isSubmitReady={isSubmitReady}
          submit={submit}
        />        

      </form>
    </div>
  )
}

export default Registration;