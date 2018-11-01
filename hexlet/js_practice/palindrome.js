const isPalindrome = (string) => {
    if (string.length <= 1) {
      return true;
    }
  
    const firstSymbol = string[0];
    const lastSymbol = string[string.length - 1];
  
    if (firstSymbol !== lastSymbol) {
      return false;
    }
  
    const stringWithoutFirstAndLastSymbols = string.substr(1, string.length - 2);
  
    return isPalindrome(stringWithoutFirstAndLastSymbols);
  };
  
  export default isPalindrome;