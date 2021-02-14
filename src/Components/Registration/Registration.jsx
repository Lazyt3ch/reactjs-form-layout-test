import React, {useState, useEffect} from 'react';
import "./Registration.css";
import TextInput from "../TextInput/TextInput.jsx";
import Dropdown from "../Dropdown/Dropdown.jsx";
import Checkbox from "../Checkbox/Checkbox.jsx";
import Submit from "../Submit/Submit.jsx";

const tabIndex = 0;

const invalidMessage = "Введено некорректное значение";
const emptyMessage = "Поле не заполнено";

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
      emptyMessage,
      tabIndex: 0,
    },
    {
      inputId: "email",
      labelText: "Email",
      placeholderText: "Введите ваш email",
      invalidMessage,
      emptyMessage,
      tabIndex: 0,
    },
    {
      inputId: "phone",
      labelText: "Номер телефона",
      placeholderText: "Введите номер телефона",
      invalidMessage,
      emptyMessage,
      tabIndex: 0,
    },  
  ];

  const [textInputStates, setTextInputStates] = useState({
    username: { isValid: true, isFilled: false, isFocused: false },
    email: { isValid: true, isFilled: false, isFocused: false },
    phone: { isValid: true, isFilled: false, isFocused: false },
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
        .every( ([key, value]) => !value.isFocused && value.isFilled && value.isValid);

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
          <span>Уже есть аккаунт?</span> <a href="login" className="link" tabIndex={tabIndex}>Войти</a>
        </div>

        {textInputData.map((data) => 
          <TextInput 
            key={data.inputId} 
            data={data}
            textInputStates={textInputStates}
            setTextInputStates={setTextInputStates}
            tabIndex={0}
          />
        )}

        <Dropdown 
          data={selectData}
          tabIndex={0}
        />        

        <div className="registration-form__terms registration-form_margin-left">
          <Checkbox 
            termsAccepted={termsAccepted}
            setTermsAccepted={setTermsAccepted}          
            tabIndex={0}
          />

          <div className="registration-form__terms__checkbox-text">
            {/* TODO: Replace the dummy link! */}
            Принимаю <a href="terms" className="link" tabIndex={tabIndex}>условия</a> использования
          </div>
        </div>

        <Submit 
          isSubmitReady={isSubmitReady}
          handleSubmit={handleSubmit}
          tabIndex={0}
        />        

      </form>
    </div>
  )
}

export default Registration;