//random password generator

function generatePassword(
  length,
  includeLowercase,
  includeUppercase,
  includeNumber,
  includeSymbol
) {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTVWXYZ";
  const numberchars = "0123456789";
  const symbolchars = "!@#$^()_+-=";
  let allowedchars = "";
  let password = "";

  allowedchars += includeLowercase ? lowercaseChars : "";
  allowedchars += includeUppercase ? uppercaseChars : "";
  allowedchars += includeNumber ? numberchars : "";
  allowedchars += includeSymbol ? symbolchars : "";
  //   console.log(allowedchars);

  if (length <= 0) {
    return `(password length must be at least 1)`;
  }

  if (allowedchars.length === 0) {
    return `(at least one set of character needs to be selected)`;
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedchars.length);
    password += allowedchars[randomIndex];
  }

  return password;
}
const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumber = true;
const includeSymbol = true;

const password = generatePassword(
  passwordLength,
  includeLowercase,
  includeUppercase,
  includeNumber,
  includeSymbol
);

console.log(`Generated password:${password}`);
