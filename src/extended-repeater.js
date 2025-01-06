const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  str = String(str);

  let addition = options.hasOwnProperty('addition')
    ? String(options.addition)
    : '';


  let additionRepeatTimes = options.additionRepeatTimes || 0;



  let additionSeparator = options.additionSeparator || '|';


  let additionPart = '';
  if (additionRepeatTimes > 0) {
    additionPart = new Array(additionRepeatTimes)
      .fill(addition)
      .join(additionSeparator);
  } else if (addition) {

    additionPart = addition;
  }


  let repeatTimes = options.repeatTimes || 0;

  if (repeatTimes === 0) {
    repeatTimes = 1;
  }


  let separator = options.separator || '+';


  return new Array(repeatTimes)
    .fill(str + additionPart)
    .join(separator);
}

module.exports = {
  repeater
};
