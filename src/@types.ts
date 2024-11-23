export interface StringProcessorContract {
    reverse(str: string, pointers: boolean): string;
    isPalindrome(str: string): boolean;
    isAnagrams(str1: string, str2: string): boolean
} 