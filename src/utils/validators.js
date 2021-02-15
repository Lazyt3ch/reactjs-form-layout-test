const validate = (value, valueType) => {
  switch (valueType) {
    case "username":
      // I'm not sure what to do with Chinese characters...
      const RUSSIAN_LETTERS = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
      const ENGLISH_LETTERS = "abcdefghijklmnopqrstuvwxyz";
      const SOME_SPANISH_LETTERS = "áéíóúüñ";
      const usernameChars = `${RUSSIAN_LETTERS}${ENGLISH_LETTERS}${SOME_SPANISH_LETTERS} -`;
      return Array.from(value.toLowerCase()).every( char => usernameChars.includes(char) );
    case "email":
      // Regex source: https://www.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/ch04s01.html
      return /^[a-z0-9+_.-]+@[a-z0-9.-]+$/i.test(value);
    case "phone":
      const ALLOWED_CHARS = "0123456789()-+";
      const trimmedChars = Array.from(value.trim());

      if ( !trimmedChars.every( char => ALLOWED_CHARS.includes(char) ) ) {
        return false;
      }

      if ( trimmedChars.lastIndexOf("+") > 0 ) {
        return false; // Plus sign is allowed in the very beginning only
      }

      if ( trimmedChars.filter( char => "0123456789".includes(char) ).length !== 11 ) {
        return false; // 11 digits allowed
      }

      return true;
    default:
      return true;
  }
}

export default validate;