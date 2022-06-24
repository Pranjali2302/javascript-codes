function checkPalindrome(str) {
    // convert string to an array
    const reverseString = string.split('').reverse().join('');
    
    if(string == reverseString) {
        console.log('palindrome');
    }
    else {
        console.log('not palindrome');
    }
}
let string = 'madam'
checkPalindrome(string)