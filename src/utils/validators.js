const validate = (value, valueType) => {
  switch (valueType) {
    case "username":
      // I'm not sure what to do with Chinese characters...
      const RUSSIAN_LETTERS = "абвгдеёжзиклмнопрстуфхцчшщъюьэюя";
      const ENGLISH_LETTERS = "abcdefghijklmnopqrstuvwxyz";
      const SOME_SPANISH_LETTERS = "áéíóúüñ";
      const usernameChars = `${RUSSIAN_LETTERS}${ENGLISH_LETTERS}${SOME_SPANISH_LETTERS} -`;
      return Array.from(value.toLowerString()).every( char => usernameChars.includes(char) );
    default:
      return true;
  }
}

export default validate;