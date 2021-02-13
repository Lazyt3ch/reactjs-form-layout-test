import React, {useState, useEffect} from 'react';
import "./Registration.css";
import TextInput from "../TextInput/TextInput.jsx";
import Dropdown from "../Dropdown/Dropdown.jsx";
import Checkbox from "../Checkbox/Checkbox.jsx";
import Submit from "../Submit/Submit.jsx";

const invalidMessage = "Введено некорректное значение";

const languages = [
  "Русский",
  "Английский",
  "Китайский",
  "Испанский"
];

function Registration(props) {
  const textInputData = [
    {
      inputId: "username",
      labelText: "Имя",
      placeholderText: "Введите ваше имя",
      invalidMessage,
      tabIndex: 1,
    },
    {
      inputId: "email",
      labelText: "Email",
      placeholderText: "Введите ваш email",
      invalidMessage,
      tabIndex: 2,
    },
    {
      inputId: "phone",
      labelText: "Номер телефона",
      placeholderText: "Введите номер телефона",
      invalidMessage,
      tabIndex: 3,
    },  
  ];

  const [textInputStates, setTextInputStates] = useState({
    username: { isValid: true, isFilled: false },
    email: { isValid: true, isFilled: false },
    phone: { isValid: true, isFilled: false },
  });

  const [language, setLanguage] = useState("");

  const selectData = {
    labelText: "Язык",
    initialValue: "Язык",
    languages,
    language,
    setLanguage,
  };

  const [termsAccepted, setTermsAccepted] = useState(false);

  const [isSubmitReady, setIsSubmitReady] = useState(false);

  useEffect(() => 
    {
      const submitReadiness = termsAccepted && Object.entries(textInputStates)
        .every( ([key, value]) => value.isFilled && value.isValid);

      setIsSubmitReady(submitReadiness);
    },
    [textInputStates, termsAccepted]
  );

  const handleSubmit = () => {
    // TODO: Add code to submit the form content
  };

  return (
    <div className="registration-form__container">
      <form action="" className="registration-form">

        <div className="registration-form__header registration-form_margin-left">
          <p className="registration-form__title">Регистрация</p>
        </div>

        <div className="registration-form__text registration-form_margin-left">
          {/* TODO: Replace the dummy link! */}
          <span>Уже есть аккаунт?</span> <a href="login" className="link">Войти</a>
        </div>

        {textInputData.map((data) => 
          <TextInput 
            key={data.inputId} 
            data={data}
            textInputStates={textInputStates}
            setTextInputStates={setTextInputStates}
          />
        )}

        <Dropdown 
          data={selectData}
        />        

        <div className="registration-form__terms registration-form_margin-left">
          <Checkbox 
            termsAccepted={termsAccepted}
            setTermsAccepted={setTermsAccepted}          
          />

          <div className="registration-form__terms__checkbox-text">
            {/* TODO: Replace the dummy link! */}
            Принимаю <a href="terms" className="link">условия</a> использования
          </div>
        </div>

        <Submit 
          isSubmitReady={isSubmitReady}
          handleSubmit={handleSubmit}
        />        

      </form>
    </div>
  )
}

export default Registration;