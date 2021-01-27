import React from 'react';
import "./Registration.css";

function Registration(props) {
  return (
    <div className="registration-form-container">
      <form action="" className="registration-form">
        <div className="registration-form-header margin-left">
          <p className="registration-form-title">Регистрация</p>
        </div>
        <div className="registration-form-text margin-left">
          <span>Уже есть аккаунт?</span> <a href="#">Войти</a>


        </div>
      </form>
    </div>
  )
}

export default Registration;