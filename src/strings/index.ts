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
     * Функция для проверки строки на палиндром.
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

    /**
     * Функция для проверки строк на анаграммы.
     * @param str1 - первая строка для сравнения
     * @param str2 - вторая строка для сравнения
     * @returns являются ли две строки анаграммами.
    */
    public isAnagrams(str1: string, str2: string): boolean {
        // Если длины строк разные, то они не могут быть анаграммами
        if (str1.length !== str2.length) {
            return false;
        }

        // Приводим обе строки к нижнему регистру и удаляем пробелы
        str1 = str1.replace(/\s+/g, '').toLowerCase();
        str2 = str2.replace(/\s+/g, '').toLowerCase();

        // Создаем объект для подсчета символов в первой строке
        const charCount: Record<string, number> = {};

        // Подсчитываем частоту символов в первой строке
        for (let char of str1) {
            charCount[char] = (charCount[char] || 0) + 1;
        }

        // Проверяем, соответствует ли частота символов во второй строке
        for (let char of str2) {
            if (!charCount[char]) {
                return false; // Если символ во второй строке не найден или его количество не совпадает
            }
            charCount[char] -= 1;
        }

        // Если все проверки прошли успешно, то строки являются анаграммами
        return true;
    }
}