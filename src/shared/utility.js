import { MONTHS } from "./constants";

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

export const getPublishDate = (date) => {
  return MONTHS[new Date(date).getDay()] + " " + new Date(date).getDate();
};

export const getContentIntro = (content) => {
  let intro;
  // Get the first object that has a text.
  let tempContent = JSON.parse(content);
  for (let i = 0; i < tempContent.blocks.length; i++) {
    if (tempContent.blocks[i].text.trim() !== "") {
      intro = JSON.stringify(tempContent.blocks[i].text).replace(/\\n/g, "");
      break;
    }
  }

  // If text is more than 50 it will be trim.
  let trimmedContent;
  if (intro.length > 140) {
    trimmedContent = intro.substr(1, 140) + ". . .";
  } else {
    trimmedContent = intro.substring(1, intro.length - 1);
  }
  return trimmedContent;
};

export const getReadTime = (post) => {
  let content = JSON.parse(post);
  if (content !== null) {
    let wordCount = 0;
    let tempReadTime;
    for (let i = 0; i < content.blocks.length; i++) {
      let str = JSON.stringify(content.blocks[i].text)
        .replace(/\\n/g, "")
        .trim();
      wordCount = wordCount + str.split(" ").length;
      let wordsPerMinute = 200;
      tempReadTime = Math.ceil(wordCount / wordsPerMinute) - 1;
      tempReadTime = tempReadTime ? tempReadTime : 1;
    }
    return tempReadTime;
  }
};
