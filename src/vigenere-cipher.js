const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(message, key) {
    if (arguments.length < 2 || !message || !key) {
      throw new Error('Incorrect arguments!');
    }
    let result = '';
    message = message.toUpperCase();
    key = key.toUpperCase();

    let keyIndex = 0;
    for (let i = 0; i < message.length; i++) {
      const letter = message[i];
      if (this.alphabet.includes(letter)) {
        const letterPos = this.alphabet.indexOf(letter);
        const shift = this.alphabet.indexOf(key[keyIndex % key.length]);
        const encodedPos = (letterPos + shift) % 26;
        result += this.alphabet[encodedPos];
        keyIndex++;
      } else {
        result += letter;
      }
    }
    return this.isDirect ? result : result.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (arguments.length < 2 || !encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }
    let result = '';
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let keyIndex = 0;
    for (let i = 0; i < encryptedMessage.length; i++) {
      const letter = encryptedMessage[i];
      if (this.alphabet.includes(letter)) {
        const letterPos = this.alphabet.indexOf(letter);
        const shift = this.alphabet.indexOf(key[keyIndex % key.length]);
        const decodedPos = (letterPos - shift + 26) % 26;
        result += this.alphabet[decodedPos];
        keyIndex++;
      } else {
        result += letter;
      }
    }
    return this.isDirect ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
