function commonString(input, common) {
  if (typeof input === 'string' && typeof common === 'string') {
    const splitInput = input.split(' ');
    for (let i = 0; i < splitInput.length; i++) {
      if (common === splitInput[i]) {
        return true;
      }
    }
    return false;
  }
}
console.log(commonString('i am a good boy', 'Good'));
//2nd method
function commonString2(input, common) {
  if (typeof input === 'string') {
    input += ' ';
    let splitInput = '';
    const obj = {};
    for (let i = 0; i < input.length; i++) {
      if (input[i] !== ' ') {
        splitInput += input[i];
      } else {
        obj[splitInput] = true;
        splitInput = '';
      }
    }
    if (obj.hasOwnProperty(common)) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(commonString2('i am a good boy', 'good'));
