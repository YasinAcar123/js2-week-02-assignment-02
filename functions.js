const changeEmailFromGmailToHicoders = (pArray) => {
      let result=pArray.reverse().map((item)=> item.toLowerCase().replace(["@gmail.com"], ["@hicoders.ch"]))
      return result;
};


const findSuperNumbers = (pNum) => {
      const result=pNum.filter((element)=> {
            let firstDigit= element %10;
            let secondDigit= Math.floor(element/10) %10
            let thirdDigit= Math.floor(element/100) %10
        
            let total= (Math.pow(firstDigit,3))+ (Math.pow(secondDigit,3))+ (Math.pow(thirdDigit,3))
            return total=== element
        })
  return result
};

export { changeEmailFromGmailToHicoders, findSuperNumbers };
