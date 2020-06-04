export const httpErrors = (error) => {
  switch (error) {
    case "EMAIL_NOT_FOUND":
      return "Email doesn't exists.";
    case "INVALID_PASSWORD":
      return "Incorrect Password.";
    case "EMAIL_EXISTS":
      return "Email is already taken. Please try another one.";
    case "TOO_MANY_ATTEMPTS_TRY_LATER : Too many unsuccessful login attempts. Please try again later.":
      return "Too many unsuccessful login attempts. Please try again later.";
    default:
      return;
  }
};
