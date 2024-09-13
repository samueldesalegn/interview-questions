function isPalindrome(str: string): boolean {
  
  const transformed = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  
  return transformed === transformed.split("").reverse().join("");
}


console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("racecar"));                        // true
console.log(isPalindrome("hello"));                          // false
console.log(isPalindrome("Was it a car or a cat I saw?"));   // true
console.log(isPalindrome("No 'x' in Nixon"));                // true