/*
Create object "utils". It should contain:
- function to generate random number
- function to generate random alphanumeric string
- simple logger: has to contain 2 arguments - level (default value is "INFO"), message
*/

const utils = {
  getRandomNumber: () => {
    return Math.floor(Math.random() * 100);
  },
  getRandomAlphanumericString: (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  },
  logger: (level = 'INFO', message) => {
    console.log(`[${level}] ${message}`);
  },
};

module.exports = {
  utils,
};

console.log(utils.getRandomNumber());
console.log(utils.getRandomAlphanumericString(10)); 
utils.logger(undefined, 'An error occurred.'); 