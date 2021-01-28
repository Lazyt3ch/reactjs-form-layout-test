const validate = (value, valueType) => {
  // Username
  // I'm not sure what to do with Chinese characters...
  const ENGLISH_LETTERS = "abcdefghijklmnopqrstuvwxyz";
  const RUSSIAN_LETTERS = "абвгдеёжзиклмнопрстуфхцчшщъюьэюя";
  const usernameChars = `${ENGLISH_LETTERS}${RUSSIAN_LETTERS} -`;

  switch (valueType) {
    case "username":
      return Array.from(value.toLowerString()).every( char => usernameChars.includes(char) );
    default:
      return true;
  }
}

export default validate;