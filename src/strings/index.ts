import { StringProcessorContract } from '../@types';

export default class StringProcessor implements StringProcessorContract {
    constructor() { };

    /**
     * Функция для переворота строки.
     * @param str - строка, которую нужно перевернуть.
     * @param pointers - тип алгоритма, true - если использовать указатели | false - использовать forEach.
     * @returns перевернутая строка.
    */
    public reverse(str: string, pointers: boolean = false): string {
        const len = str.length;
        if (pointers) {
            let reversedString = str.split('');
            let left = 0;
            let right = len - 1;

            while (left < right) {
                // let temp: string = reversedString[left];
                // reversedString[left] = reversedString[right]
                // reversedString[right] = temp;
                [reversedString[left], reversedString[right]] = [reversedString[right], reversedString[left]];
                left++;
                right--;
            }

            return reversedString.join('');
        } else {
            let reversedString = '';
            for (let i = len - 1; i >= 0; i--) {
                reversedString += str[i];
            }
            return reversedString;
        }
    };

    /**
     * Функция для переворота строки.
     * @param str - строка, которую нужно проверить на палиндром.
     * @returns является ли строка палиндромом.
    */
    public isPalindrome(str: string): boolean {
        const len = str.length;
        let left = 0;
        let right = len - 1;

        while (left < right) {
            if (str[left] !== str[right]) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    };
}