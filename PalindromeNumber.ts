function isPalindrome(x: number): boolean {
    const default = x.toString();
    const reversed = default.split('').reverse().join('');
    return default === reversed;
};