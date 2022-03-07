const EMAIL_REGEX = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

class Validator {
  checkIsEmpty(value) {
    if (!value.trim()) {
      return true;
    } else {
      return false;
    }
  }

  validateEmail(email) {
    if (!email.trim()) {
      return { isValid: false, msg: "Please enter your email address" };
    } else if (!email.trim().match(EMAIL_REGEX)) {
      return { isValid: false, msg: "Please enter a valid email address" };
    } else {
      return { isValid: true };
    }
  }
}

export const validator = new Validator();
