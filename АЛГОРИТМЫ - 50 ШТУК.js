// 1. Reverse a String
// Реверс строки, не используя встроенные методы.

const reverseString = (str) => {
    // const reversedString = [];
    // return str.split('').forEach(char => {
    //     reversedString.unshift(char);
    // }).join('');
    // OR
    let reversedString = str.split('');
    let left = 0;
    let right = str.length - 1;
    while (left <= right) {
        let temp = reversedString[left];
        reversedString[left] = reversedString[right]
        reversedString[right] = temp;

        left++;
        right--;
    }

    return reversedString.join('');
}

console.log(reverseString('hello'));

// 2. Check for Palindrome
// Палиндром — строка, которая читается одинаково в обе стороны (например, "racecar").

const isPalindrome = (str) => {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

console.log(isPalindrome('kazak'));

// 3. Anagram Check
// Проверка, являются ли две строки анаграммами (содержат ли одинаковые символы в разных порядках).
function areAnagrams(str1, str2) {
    // Если длины строк разные, то они не могут быть анаграммами
    if (str1.length !== str2.length) {
        return false;
    }

    // Приводим обе строки к нижнему регистру и удаляем пробелы
    str1 = str1.replace(/\s+/g, '').toLowerCase();
    str2 = str2.replace(/\s+/g, '').toLowerCase();

    // Создаем объект для подсчета символов в первой строке
    const charCount = {};

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

// Примеры использования:
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world")); // false
console.log(areAnagrams("race", "care")); // true


// 4. Find the Longest Substring Without Repeating Characters
// Нахождение самой длинной подстроки, не содержащей повторяющихся символов.

function lengthOfLongestSubstring(s) {
    let map = new Map();  // Словарь для хранения индексов символов
    let start = 0;        // Указатель на начало подстроки
    let maxLength = 0;    // Длина самой длинной подстроки без повторов

    for (let end = 0; end < s.length; end++) {
        // Если символ уже встречался в подстроке, сдвигаем start
        if (map.has(s[end])) {
            // Сдвигаем start на максимальное значение между текущим start и индексом после последнего вхождения символа
            start = Math.max(start, map.get(s[end]) + 1);
        }

        // Обновляем индекс текущего символа
        map.set(s[end], end);

        // Обновляем максимальную длину
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

// Пример использования:
console.log(lengthOfLongestSubstring("abcabcbb")); // 3 (abc)
console.log(lengthOfLongestSubstring("bbbbb"));    // 1 (b)
console.log(lengthOfLongestSubstring("pwwkew"));   // 3 (wke)

// 5. Array Deduplication
// Удаление дубликатов из массива.
function removeDuplicates(arr) {
    let uniqueArr = [];

    // Проходим по каждому элементу массива
    for (let i = 0; i < arr.length; i++) {
        // Если элемент еще не встречался, добавляем его в новый массив
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        }
    }

    return uniqueArr;
}

// Пример использования:
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

function removeDuplicates(arr) {
    return arr.reduce((uniqueArr, currentValue) => {
        // Если текущий элемент еще не в уникальном массиве, добавляем его
        if (!uniqueArr.includes(currentValue)) {
            uniqueArr.push(currentValue);
        }
        return uniqueArr;
    }, []);
}

// Пример использования:
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

// 6. Find the Missing Number in an Array
// Найти недостающее число в массиве, который содержит числа от 1 до N.
function findMissingNumber(arr) {
    const n = arr.length + 1; // Так как одно число отсутствует, размер массива будет на 1 меньше
    const expectedSum = (n * (n + 1)) / 2; // Сумма чисел от 1 до N
    const actualSum = arr.reduce((sum, num) => sum + num, 0); // Сумма всех элементов в массиве

    return expectedSum - actualSum; // Недостающее число
}

// Пример использования:
console.log(findMissingNumber([1, 2, 4, 5, 6])); // 3
console.log(findMissingNumber([1, 3, 4, 5, 6])); // 2
console.log(findMissingNumber([1, 2, 3, 5]));    // 4

// 7. Count Vowels in a String
// Подсчитать количество гласных в строке.
function countVowels(str) {
    // Множество гласных букв, как в нижнем, так и в верхнем регистре
    const vowels = 'aeiouAEIOU';
    let count = 0;

    // Проходим по каждому символу строки
    for (let i = 0; i < str.length; i++) {
        // Если символ является гласной, увеличиваем счетчик
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}

// Пример использования:
console.log(countVowels("hello"));  // 2
console.log(countVowels("javascript"));  // 3
console.log(countVowels("aeiou"));  // 5
console.log(countVowels("bcdfg"));  // 0

// 8. Find the Largest Number in an Array
// Найти максимальное число в массиве.
function findLargestNumber(arr) {
    // Проверяем, если массив пустой, возвращаем undefined
    if (arr.length === 0) {
        return undefined;
    }

    // Изначально считаем, что максимальное число — это первый элемент массива
    let max = arr[0];

    // Проходим по всем остальным элементам массива
    for (let i = 1; i < arr.length; i++) {
        // Если текущий элемент больше, чем текущее максимальное, обновляем max
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

// Пример использования:
console.log(findLargestNumber([1, 2, 3, 4, 5])); // 5
console.log(findLargestNumber([-1, -2, -3, -4])); // -1
console.log(findLargestNumber([10, 20, 30, 5])); // 30
console.log(findLargestNumber([5])); // 5
console.log(findLargestNumber([])); // undefined


// 9. Move Zeros to the End of Array
// Переместить все нули в массиве в конец, сохраняя порядок остальных элементов.

function moveZerosToEnd(arr) {
    let index = 0; // Указатель на место для ненулевого элемента

    // Проходим по массиву
    for (let i = 0; i < arr.length; i++) {
        // Если элемент не равен 0
        if (arr[i] !== 0) {
            // Меняем местами элементы
            if (i !== index) {
                [arr[i], arr[index]] = [arr[index], arr[i]];
            }
            // Увеличиваем индекс для следующего ненулевого элемента
            index++;
        }
    }

    return arr;
}

// Пример использования:
console.log(moveZerosToEnd([0, 1, 2, 0, 3, 0, 4])); // [1, 2, 3, 4, 0, 0, 0]
console.log(moveZerosToEnd([1, 0, 0, 2, 0, 3])); // [1, 2, 3, 0, 0, 0]


function moveZerosToEnd(arr) {
    let result = []; // Новый массив для хранения ненулевых элементов
    let zeroCount = 0; // Счетчик нулей

    // Проходим по исходному массиву
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeroCount++;
        } else {
            result.push(arr[i]);
        }
    }

    // Добавляем нули в конец
    while (zeroCount > 0) {
        result.push(0);
        zeroCount--;
    }

    return result;
}

// Пример использования:
console.log(moveZerosToEnd([0, 1, 2, 0, 3, 0, 4])); // [1, 2, 3, 4, 0, 0, 0]
console.log(moveZerosToEnd([1, 0, 0, 2, 0, 3])); // [1, 2, 3, 0, 0, 0]


// 10. Sum of Digits
// Посчитать сумму цифр числа.
function sumOfDigits(number) {
    // Преобразуем число в строку, затем разбиваем его на массив цифр, конвертируем каждую в число и суммируем
    return Math.abs(number) // Используем Math.abs, чтобы учесть отрицательные числа
        .toString()              // Преобразуем число в строку
        .split('')               // Разбиваем строку на массив символов (цифр)
        .map(Number)             // Преобразуем каждый символ обратно в число
        .reduce((sum, digit) => sum + digit, 0); // Суммируем все цифры
}

// Пример использования:
console.log(sumOfDigits(1234));   // 10 (1 + 2 + 3 + 4)
console.log(sumOfDigits(-5678));  // 26 (5 + 6 + 7 + 8)
console.log(sumOfDigits(0));      // 0
console.log(sumOfDigits(987654321)); // 45 (9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1)

// 11. Find the Second Largest Element in an Array
// Найти второй по величине элемент в массиве.

function findSecondLargest(arr) {
    if (arr.length < 2) {
        return undefined; // Если массив меньше 2 элементов, нет второго по величине
    }

    let largest = -Infinity; // Инициализируем максимальное значение как -Infinity
    let secondLargest = -Infinity; // Инициализируем второе по величине значение как -Infinity

    // Проходим по массиву
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest; // Обновляем второе по величине
            largest = arr[i]; // Обновляем максимальное значение
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i]; // Обновляем второе по величине, если текущий элемент меньше max, но больше второго max
        }
    }

    return secondLargest === -Infinity ? undefined : secondLargest; // Если второго по величине не было, возвращаем undefined
}

// Пример использования:
console.log(findSecondLargest([1, 2, 3, 4, 5]));  // 4
console.log(findSecondLargest([10, 5, 20, 15]));  // 15
console.log(findSecondLargest([5, 5, 5, 5]));     // undefined (все элементы одинаковы)
console.log(findSecondLargest([7, 2, 9, 8]));     // 8
console.log(findSecondLargest([3]));              // undefined (массив слишком мал)


function findSecondLargest(arr) {
    if (arr.length < 2) {
        return undefined; // Если в массиве меньше 2 элементов, нет второго по величине
    }

    let largest = null;
    let secondLargest = null;

    // Проходим по всем элементам массива
    for (let i = 0; i < arr.length; i++) {
        if (largest === null || arr[i] > largest) {
            secondLargest = largest; // Обновляем второе по величине
            largest = arr[i]; // Обновляем максимальное значение
        } else if (arr[i] !== largest && (secondLargest === null || arr[i] > secondLargest)) {
            secondLargest = arr[i]; // Обновляем второе по величине
        }
    }

    return secondLargest; // Если второго по величине элемента не было, вернется null
}

// Пример использования:
console.log(findSecondLargest([1, 2, 3, 4, 5]));  // 4
console.log(findSecondLargest([10, 5, 20, 15]));  // 15
console.log(findSecondLargest([5, 5, 5, 5]));     // undefined (все элементы одинаковы)
console.log(findSecondLargest([7, 2, 9, 8]));     // 8
console.log(findSecondLargest([3]));              // undefined (массив слишком мал)


// 12. Two Sum
// Даны массив чисел и целое число, нужно найти два числа, сумма которых равна целому числу.

function twoSum(nums, target) {
    const numMap = new Map(); // Создаем хэш-таблицу для хранения чисел и их индексов

    // Проходим по массиву
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // Находим недостающее число для целевой суммы

        // Если complement уже есть в хэш-таблице, то нашли пару чисел
        if (numMap.has(complement)) {
            return [numMap.get(complement), i]; // Возвращаем индексы
        }

        // Если complement не найден, добавляем текущее число в хэш-таблицу
        numMap.set(nums[i], i);
    }

    return null; // Если пара не найдена, возвращаем null
}

// Пример использования:
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1] (2 + 7 = 9)
console.log(twoSum([3, 2, 4], 6)); // [1, 2] (2 + 4 = 6)
console.log(twoSum([3, 3], 6)); // [0, 1] (3 + 3 = 6)
console.log(twoSum([1, 2, 3, 4], 8)); // null (нет такой пары)


function twoSum(nums, sum) {
    const numsMap = Object.create(null);
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if ((sum - num) in numsMap) {
            return [numsMap[sum - num], i];
        }
        numsMap[num] = i;
    }
}

// Примеры использования
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([3, 3], 6)); // [0, 1]


function twoSum(nums, target) {
    // Проходим по всем возможным парам чисел в массиве
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]; // Возвращаем индексы пары чисел
            }
        }
    }

    return null; // Если пара не найдена, возвращаем null
}

// Пример использования:
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1] (2 + 7 = 9)
console.log(twoSum([3, 2, 4], 6)); // [1, 2] (2 + 4 = 6)
console.log(twoSum([3, 3], 6)); // [0, 1] (3 + 3 = 6)
console.log(twoSum([1, 2, 3, 4], 8)); // null (нет такой пары)


// 13. Merge Two Sorted Arrays
// Объединить два отсортированных массива в один отсортированный массив.

function mergeSortedArrays(arr1, arr2) {
    let result = []; // Массив для результата
    let i = 0, j = 0;

    // Проходим по обоим массивам и добавляем наименьший элемент в result
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    // Если элементы остались в arr1, добавляем их в result
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    // Если элементы остались в arr2, добавляем их в result
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}

// Пример использования:
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeSortedArrays([1, 4, 7], [2, 3, 8])); // [1, 2, 3, 4, 7, 8]
console.log(mergeSortedArrays([], [1, 2, 3])); // [1, 2, 3]
console.log(mergeSortedArrays([5, 6], [])); // [5, 6]
console.log(mergeSortedArrays([], [])); // []


function mergeSortedArrays(arr1, arr2) {
    // Объединяем два массива с помощью concat и сортируем результат
    return arr1.concat(arr2).sort((a, b) => a - b);
}

// Пример использования:
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeSortedArrays([1, 4, 7], [2, 3, 8])); // [1, 2, 3, 4, 7, 8]
console.log(mergeSortedArrays([], [1, 2, 3])); // [1, 2, 3]
console.log(mergeSortedArrays([5, 6], [])); // [5, 6]
console.log(mergeSortedArrays([], [])); // []


// 14. Sort an Array Without Using Built-in Sort
// Отсортировать массив без использования встроенной функции сортировки.

function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    // Проходим по массиву несколько раз
    for (let i = 0; i < n - 1; i++) {
        swapped = false;

        // Проходим по массиву от начала до конца
        for (let j = 0; j < n - 1 - i; j++) {
            // Если текущий элемент больше следующего, меняем их местами
            if (arr[j] > arr[j + 1]) {
                // Меняем местами
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                swapped = true; // Отметим, что произошел обмен
            }
        }

        // Если за весь проход не было сделано ни одного обмена, массив отсортирован
        if (!swapped) break;
    }

    return arr;
}

// Пример использования:
console.log(bubbleSort([5, 3, 8, 4, 2]));  // [2, 3, 4, 5, 8]
console.log(bubbleSort([1, 2, 3, 4, 5]));  // [1, 2, 3, 4, 5]
console.log(bubbleSort([10, 3, 7, 5, 2])); // [2, 3, 5, 7, 10]


// 15. Find the Common Elements in Two Arrays
// Найти общие элементы в двух массивах.

function findCommonElements(arr1, arr2) {
    // Преобразуем второй массив в Set для быстрого поиска
    const set2 = new Set(arr2);

    // Проходим по первому массиву и проверяем наличие элемента во втором массиве (set2)
    return arr1.filter(item => set2.has(item));
}

// Пример использования:
console.log(findCommonElements([1, 2, 3, 4, 5], [4, 5, 6, 7])); // [4, 5]
console.log(findCommonElements([10, 20, 30], [15, 20, 25])); // [20]
console.log(findCommonElements([1, 2, 3], [4, 5, 6])); // []
console.log(findCommonElements([], [1, 2, 3])); // []


function findCommonElements(arr1, arr2) {
    const set2 = new Set(arr2);  // Преобразуем второй массив в Set для быстрого поиска
    let commonElements = [];    // Массив для хранения общих элементов

    // Проходим по первому массиву и проверяем наличие элемента во втором массиве (set2)
    for (let i = 0; i < arr1.length; i++) {
        if (set2.has(arr1[i])) {  // Если элемент из arr1 есть в set2
            commonElements.push(arr1[i]);
        }
    }

    return commonElements;
}

// Пример использования:
console.log(findCommonElements([1, 2, 3, 4, 5], [4, 5, 6, 7])); // [4, 5]
console.log(findCommonElements([10, 20, 30], [15, 20, 25])); // [20]
console.log(findCommonElements([1, 2, 3], [4, 5, 6])); // []
console.log(findCommonElements([], [1, 2, 3])); // []


// 16. Find the Missing Character in a String
// Найти пропущенный символ в строке, содержащей все буквы алфавита, кроме одного.

function findMissingCharacter(str) {
    const alphabetSum = 97 * 26 + (26 * (26 - 1)) / 2;  // Сумма всех кодов символов 'a' - 'z'
    let strSum = 0;

    // Суммируем коды символов в строке
    for (let i = 0; i < str.length; i++) {
        strSum += str.charCodeAt(i);
    }

    // Пропущенный символ - разница
    return String.fromCharCode(alphabetSum - strSum);
}

// Пример использования:
console.log(findMissingCharacter('abcdeghijklmnopqrstuvwxyz'));  // 'f'
console.log(findMissingCharacter('abcdefghijklmnopqrstuvwxy'));  // 'z'
console.log(findMissingCharacter('abcdefghijklmopqrstuvwxyz')); // 'n'


function findMissingCharacter(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';  // Строка всех букв алфавита
    const set = new Set(str);  // Создаем множество из символов строки

    // Проходим по всем буквам алфавита и ищем отсутствующую
    for (let char of alphabet) {
        if (!set.has(char)) {
            return char;  // Возвращаем пропущенный символ
        }
    }
}

// Пример использования:
console.log(findMissingCharacter('abcdeghijklmnopqrstuvwxyz'));  // 'f'
console.log(findMissingCharacter('abcdefghijklmnopqrstuvwxy'));  // 'z'
console.log(findMissingCharacter('abcdefghijklmopqrstuvwxyz')); // 'n'


// 17. Find the Longest Word in a Sentence
// Найти самое длинное слово в предложении.

const isMostLongWord = (str) => {
    const mapa = {};
    const splittedWords = str.split(' ');
    const notIssueSymbols = [',', '.', ':', ';', '(', ')'];
    splittedWords.forEach((word, i) => {
        word.split('').forEach((char, k) => {
            if (notIssueSymbols.includes(char)) {
                splittedWords[i] = word.split('').slice(0, k).join('');
            }
        })
    })
    splittedWords.forEach(word => {
        mapa[word] = word.length;
    })
    const values = Object.values(mapa);
    const result = Math.max(values);
    return result;
}

// console.log(isMostLongWord('I am Eric, i dont wanna die. Understand?')); // Understand

// 18. Valid Parentheses
// Проверить правильность скобок в строке (например, "()", "({[]})").

const validPartnes = (str) => {

    const stack = [];
    const issueSymbols = ['(', '[', '{'];
    const patterns = {
        "(": ")",
        "[": "]",
        "{": "}",
    }

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (issueSymbols.includes(char)) {
            stack.push(char);
        } else {
            if (char !== patterns[stack.pop()]) return false;
        }
    }

    return stack.length === 0;
}


console.log(validPartnes("[({})]")); // true
console.log(validPartnes("[()]")); // true
console.log(validPartnes("(")); // false
console.log(validPartnes(")")); // false
console.log(validPartnes("([)]")); // false
console.log(validPartnes("(())")); // true
console.log(validPartnes("(()))")); // false


// 19. Flatten a Nested Array
// Превратить вложенный массив в одномерный.

function flattenArray(arr) {
    let result = [];

    // Проходим по каждому элементу массива
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            // Если элемент является массивом, рекурсивно "выпрямляем" его
            result = result.concat(flattenArray(arr[i]));
        } else {
            // Если элемент не массив, добавляем его в результат
            result.push(arr[i]);
        }
    }

    return result;
}

// Пример использования:
console.log(flattenArray([1, [2, 3], [4, [5, 6]], 7])); // [1, 2, 3, 4, 5, 6, 7]
console.log(flattenArray([1, [2, 3], 4, [5, [6, 7]]])); // [1, 2, 3, 4, 5, 6, 7]
console.log(flattenArray([1, 2, 3, [4, [5]], 6])); // [1, 2, 3, 4, 5, 6]
console.log(flattenArray([[[[1]]]]])); // [1]

function flattenArray(arr) {
    return arr.flat(Infinity); // Метод flat с глубиной Infinity "выпрямляет" все уровни массива
}

console.log(flattenArray([1, [2, 3], [4, [5, 6]], 7])); // [1, 2, 3, 4, 5, 6, 7]


// 20. Find All Pairs in an Array That Sum to a Specific Target
// Найти все пары чисел в массиве, сумма которых равна заданному числу.

function findPairs(arr, target) {
    let pairs = [];

    // Пройдем по каждому элементу массива
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            // Если сумма пары чисел равна целевому числу
            if (arr[i] + arr[j] === target) {
                pairs.push([arr[i], arr[j]]);
            }
        }
    }

    return pairs;
}

// Пример использования:
console.log(findPairs([1, 2, 3, 4, 5, 6], 7)); // [[1, 6], [2, 5], [3, 4]]
console.log(findPairs([10, 15, 3, 7], 17));   // [[10, 7]]
console.log(findPairs([1, 1, 1, 1], 2));      // [[1, 1], [1, 1], [1, 1], [1, 1]]



// 21. String Compression
// Сжать строку (например, "aabcccccaaa" → "a2b1c5a3").

const compressString = (str) => {
    let count = 1;
    let compressed = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;

        } else {
            compressed += str[i] + count;
            count = 1;
        }
    }

    return compressed.length > str ? str : compressed;
}

console.log(compressString('aabcccccaaa'));

// 22. Rotate an Array
// Повернуть массив на k позиций.

function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n;  // Учитываем случаи, когда k больше длины массива

    // Если k равно 0, массив не изменится
    if (k === 0) return arr;

    // Разбиваем массив на две части и соединяем их в другом порядке
    const rotatedArray = [...arr.slice(n - k), ...arr.slice(0, n - k)];

    return rotatedArray;
}

// Пример использования:
console.log(rotateArray([1, 2, 3, 4, 5, 6], 2)); // [5, 6, 1, 2, 3, 4]
console.log(rotateArray([1, 2, 3, 4, 5], 3));   // [3, 4, 5, 1, 2]
console.log(rotateArray([1, 2, 3, 4, 5], 7));   // [4, 5, 1, 2, 3] (7 % 5 = 2)
console.log(rotateArray([1, 2, 3, 4, 5], 0));   // [1, 2, 3, 4, 5] (повторная позиция)

function rotateArrayInPlace(arr, k) {
    const n = arr.length;
    k = k % n;  // Учитываем случаи, когда k больше длины массива

    // Если k равно 0, массив не изменится
    if (k === 0) return arr;

    // Удаляем последние k элементов и добавляем их в начало
    arr.unshift(...arr.splice(n - k, k));

    return arr;
}

// Пример использования:
console.log(rotateArrayInPlace([1, 2, 3, 4, 5, 6], 2)); // [5, 6, 1, 2, 3, 4]
console.log(rotateArrayInPlace([1, 2, 3, 4, 5], 3));   // [3, 4, 5, 1, 2]



// 23. Find the Index of an Element in a Rotated Sorted Array
// Найти индекс элемента в отсортированном циклично массиве.

function searchInRotatedArray(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // Если нашли целевой элемент
        if (arr[mid] === target) {
            return mid;
        }

        // Определяем, какая половина отсортирована
        if (arr[left] <= arr[mid]) {
            // Левая половина отсортирована
            if (arr[left] <= target && target < arr[mid]) {
                // Если цель находится в левой половине, сужаем поиск
                right = mid - 1;
            } else {
                // Иначе ищем в правой половине
                left = mid + 1;
            }
        } else {
            // Правая половина отсортирована
            if (arr[mid] < target && target <= arr[right]) {
                // Если цель находится в правой половине, сужаем поиск
                left = mid + 1;
            } else {
                // Иначе ищем в левой половине
                right = mid - 1;
            }
        }
    }

    // Если элемент не найден
    return -1;
}

// Пример использования:
console.log(searchInRotatedArray([4, 5, 6, 7, 0, 1, 2], 0)); // 4
console.log(searchInRotatedArray([4, 5, 6, 7, 0, 1, 2], 3)); // -1
console.log(searchInRotatedArray([1], 1)); // 0
console.log(searchInRotatedArray([1, 3], 3)); // 1


// 24. Find the Intersection of Two Arrays
// Найти пересечение двух массивов.

function intersectionOfArrays(arr1, arr2) {
    const set1 = new Set(arr1);
    const result = [];

    // Проходим по элементам второго массива
    for (let num of arr2) {
        // Если элемент есть в set1, добавляем его в результат
        if (set1.has(num)) {
            result.push(num);
            set1.delete(num); // Чтобы избежать добавления одинаковых элементов
        }
    }

    return result;
}

// Пример использования:
console.log(intersectionOfArrays([1, 2, 2, 1], [2, 2])); // [2, 2]
console.log(intersectionOfArrays([4, 9, 5], [9, 4, 9, 8, 4])); // [9, 4]
console.log(intersectionOfArrays([1, 2, 3], [4, 5, 6])); // []


// 25. Sum of Two Numbers as String
// Сложение двух чисел, представленных как строки.
const sumStrings = (a, b) => {

    // Преобразуем строки в числа, складываем и преобразуем обратно в строку
    // Обработка больших чисел как строк, чтобы избежать переполнения
    let carry = 0;
    let result = [];
    a = a.split('').reverse();
    b = b.split('').reverse();

    const maxLength = Math.max(a.length, b.length);
    for (let i = 0; i < maxLength; i++) {
        const digitA = i < a.length ? parseInt(a[i], 10) : 0;
        const digitB = i < b.length ? parseInt(b[i], 10) : 0;

        console.log('digitA', digitA);

        const sum = digitA + digitB + carry;
        carry = Math.floor(sum / 10);
        result.push(sum % 10);
    }

    if (carry > 0) {
        result.push(carry);
    }

    return result.reverse().join('');
}



console.log(sumStrings("123", "456")); // Ответ: "579"
console.log(sumStrings("1", "999")); // Ответ: "1000"
console.log(sumStrings("999", "999")); // Ответ: "1998"
console.log(sumStrings("0", "0")); // Ответ: "0"
console.log(sumStrings("5000", "2500")); // Ответ: "7500"

// 26. Check if a String is a Number
// Проверить, является ли строка числом.

function isNumber(str) {
    const num = Number(str);  // Преобразуем строку в число
    return !isNaN(num) && typeof num === 'number';  // Проверяем, является ли результат числом
}

// Примеры использования:
console.log(isNumber("123"));   // true
console.log(isNumber("123.45")); // true
console.log(isNumber("12e3"));  // true (экспоненциальная запись числа)
console.log(isNumber("abc"));   // false
console.log(isNumber(""));      // false
console.log(isNumber("   "));   // false (пустая строка или строка из пробелов)


// 27. Find the Median of Two Sorted Arrays
// Найти медиану двух отсортированных массивов.

function findMedianSortedArrays(nums1, nums2) {
    // Объединяем два отсортированных массива
    const mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);

    const totalLength = mergedArray.length;
    const middle = Math.floor(totalLength / 2);

    // Если общее количество элементов нечётное, возвращаем центральный элемент
    if (totalLength % 2 !== 0) {
        return mergedArray[middle];
    } else {
        // Если общее количество элементов чётное, возвращаем среднее значение двух центральных элементов
        return (mergedArray[middle - 1] + mergedArray[middle]) / 2;
    }
}

// Пример использования:
console.log(findMedianSortedArrays([1, 3], [2])); // 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.5
console.log(findMedianSortedArrays([0, 0], [0, 0])); // 0
console.log(findMedianSortedArrays([], [1])); // 1


// 28. Power of Two
// Проверить, является ли число степенью двойки.

function isPowerOfTwo(n) {
    // Число должно быть больше 0 и результат побитовой операции (n & (n - 1)) должен быть 0
    return n > 0 && (n & (n - 1)) === 0;
}

// Примеры использования:
console.log(isPowerOfTwo(1));  // true (2^0)
console.log(isPowerOfTwo(2));  // true (2^1)
console.log(isPowerOfTwo(4));  // true (2^2)
console.log(isPowerOfTwo(8));  // true (2^3)
console.log(isPowerOfTwo(16)); // true (2^4)
console.log(isPowerOfTwo(3));  // false
console.log(isPowerOfTwo(5));  // false
console.log(isPowerOfTwo(0));  // false
console.log(isPowerOfTwo(-4)); // false


// 29. Implement Map, Filter, Reduce
// Реализовать методы map(), filter() и reduce() для массива.

Array.prototype.myMap = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this)); // Вызываем коллбэк с текущим элементом, индексом и массивом
    }
    return result;
};

// Пример использования:
const arr1 = [1, 2, 3, 4];
const mappedArr = arr1.myMap(x => x * 2); // [2, 4, 6, 8]
console.log(mappedArr);


Array.prototype.myFilter = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) { // Если элемент проходит фильтрацию
            result.push(this[i]);
        }
    }
    return result;
};

// Пример использования:
const arr2 = [1, 2, 3, 4, 5];
const filteredArr = arr2.myFilter(x => x % 2 === 0); // [2, 4]
console.log(filteredArr);


Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0]; // Начальное значение аккумулятора
    let startIndex = initialValue !== undefined ? 0 : 1; // Начинаем с первого элемента, если начальное значение задано
    for (let i = startIndex; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this); // Обновляем аккумулятор
    }
    return accumulator;
};

// Пример использования:
const arr3 = [1, 2, 3, 4];
const sum = arr3.myReduce((acc, curr) => acc + curr, 0); // 10
console.log(sum);

const numbers = [1, 2, 3, 4, 5];

// Используем myMap для умножения всех чисел на 2
const doubled = numbers.myMap(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Используем myFilter для фильтрации четных чисел
const evens = numbers.myFilter(num => num % 2 === 0);
console.log(evens); // [2, 4]

// Используем myReduce для вычисления суммы всех чисел
const sum = numbers.myReduce((acc, num) => acc + num, 0);
console.log(sum); // 15



// 30. Convert a Number to Roman Numeral
// Преобразовать число в римскую цифру.

function convertToRoman(num) {
    // Массив римских цифр и их значений
    const romanNumerals = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ];

    let result = '';

    // Перебираем все римские цифры и находим соответствующие символы
    for (let i = 0; i < romanNumerals.length; i++) {
        // Пока число больше или равно текущей цифре
        while (num >= romanNumerals[i].value) {
            result += romanNumerals[i].symbol; // Добавляем символ в результат
            num -= romanNumerals[i].value; // Уменьшаем число на соответствующую величину
        }
    }

    return result;
}

// Примеры использования:
console.log(convertToRoman(1));    // "I"
console.log(convertToRoman(4));    // "IV"
console.log(convertToRoman(9));    // "IX"
console.log(convertToRoman(58));   // "LVIII"
console.log(convertToRoman(1994)); // "MCMXCIV"
console.log(convertToRoman(2023)); // "MMXXIII"


// 31. Count the Number of Words in a String
// Посчитать количество слов в строке.
function countWords(str) {
    // Убираем лишние пробелы в начале и конце строки и разделяем строку на слова
    const words = str.trim().split(/\s+/);

    // Если строка пустая, то количество слов будет 0
    return words[0] === '' ? 0 : words.length;
}

// Примеры использования:
console.log(countWords("Hello, world!"));    // 2
console.log(countWords("   This is a test string.   ")); // 5
console.log(countWords("   "));  // 0 (пустая строка или строка с пробелами)
console.log(countWords("one")); // 1
console.log(countWords("word word word word")); // 4



// 32. Find the Largest Prime Factor of a Number
// Найти наибольший простое число, которое делит заданное число.
function largestPrimeFactor(n = 100) {
    let factor = 2;
    while (factor <= n) {
        if (n % factor === 0) {
            n /= factor;
        } else {
            factor++;
        }
    }
    return factor;
}



// Примеры использования
console.log(largestPrimeFactor(13195)); // Ответ: 29
console.log(largestPrimeFactor(600851475143)); // Ответ: 6857
console.log(largestPrimeFactor(45)); // Ответ: 5
console.log(largestPrimeFactor(97)); // Ответ: 97 (97 само по себе простое число)
console.log(largestPrimeFactor(100)); // Ответ: 5


// 33. Check if a String Contains All Unique Characters
// Проверить, содержит ли строка все уникальные символы.

function hasUniqueChars(str) {
    const seen = {};  // Объект для хранения символов

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        // Если символ уже встречался, возвращаем false
        if (seen[char]) {
            return false;
        }

        // Добавляем символ в объект
        seen[char] = true;
    }

    return true; // Все символы уникальны
}

// Примеры использования:
console.log(hasUniqueChars("abcdef")); // true
console.log(hasUniqueChars("abcdeaf")); // false
console.log(hasUniqueChars("")); // true


// 34. Find Duplicate in an Array
// Найти дубликаты в массиве.

function findDuplicates(arr) {
    const seen = {};  // Объект для отслеживания уникальных элементов
    const duplicates = [];  // Массив для хранения дубликатов

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];

        // Если элемент уже встречался, добавляем его в массив дубликатов
        if (seen[num]) {
            duplicates.push(num);
        } else {
            seen[num] = true;  // Добавляем элемент в объект
        }
    }

    return duplicates;
}

// Примеры использования:
console.log(findDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 1])); // [1]
console.log(findDuplicates([4, 5, 6, 7, 8, 4, 5])); // [4, 5]
console.log(findDuplicates([1, 2, 3, 4, 5])); // []

function findDuplicates(arr) {
    const seen = new Set();  // Множество для отслеживания уникальных элементов
    const duplicates = [];  // Массив для хранения дубликатов

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];

        // Если элемент уже встречался, добавляем его в массив дубликатов
        if (seen.has(num)) {
            duplicates.push(num);
        } else {
            seen.add(num);  // Добавляем элемент в Set
        }
    }

    return duplicates;
}

// Примеры использования:
console.log(findDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 1])); // [1]
console.log(findDuplicates([4, 5, 6, 7, 8, 4, 5])); // [4, 5]
console.log(findDuplicates([1, 2, 3, 4, 5])); // []



// 35. Implement a Queue Using Two Stacks
// Реализовать очередь с помощью двух стеков.

class QueueUsingTwoStacks {
    constructor() {
        this.stack1 = []; // Стек для добавления элементов (вход)
        this.stack2 = []; // Стек для извлечения элементов (выход)
    }

    // Метод для добавления элемента в очередь
    enqueue(element) {
        this.stack1.push(element);
    }

    // Метод для извлечения элемента из очереди
    dequeue() {
        // Если второй стек пуст, переносим элементы из первого стека во второй
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }

        // Если второй стек всё ещё пуст, это значит, что очередь пуста
        if (this.stack2.length === 0) {
            return "Queue is empty";
        }

        return this.stack2.pop();
    }

    // Метод для просмотра первого элемента в очереди без удаления
    peek() {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }

        if (this.stack2.length === 0) {
            return "Queue is empty";
        }

        return this.stack2[this.stack2.length - 1];
    }

    // Проверка на пустоту очереди
    isEmpty() {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }
}

// Примеры использования:
const queue = new QueueUsingTwoStacks();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); // 1
console.log(queue.peek());    // 2
console.log(queue.dequeue()); // 2
console.log(queue.dequeue()); // 3
console.log(queue.dequeue()); // "Queue is empty"


// 36. Implement a Stack
// Реализовать структуру данных Stack (стек).

class Stack {
    constructor() {
        this.items = [];  // Массив для хранения элементов стека
    }

    // Метод для добавления элемента в стек
    push(element) {
        this.items.push(element);
    }

    // Метод для удаления элемента из стека
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";  // Если стек пуст, возвращаем сообщение
        }
        return this.items.pop();
    }

    // Метод для просмотра верхнего элемента в стеке без удаления
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }

    // Метод для проверки, пуст ли стек
    isEmpty() {
        return this.items.length === 0;
    }

    // Метод для получения размера стека
    size() {
        return this.items.length;
    }

    // Метод для очистки стека
    clear() {
        this.items = [];
    }
}

// Примеры использования:
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek()); // 30
console.log(stack.pop());  // 30
console.log(stack.peek()); // 20
console.log(stack.size()); // 2
console.log(stack.isEmpty()); // false

stack.clear();
console.log(stack.isEmpty()); // true


// 37. Reverse a Linked List
// Развернуть связанный список.

class Node {
    constructor(data) {
        this.data = data;  // Данные узла
        this.next = null;   // Указатель на следующий узел
    }
}

class LinkedList {
    constructor() {
        this.head = null;  // Начало списка
    }

    // Метод для добавления элемента в конец списка
    append(data) {
        const newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Метод для разворота связанного списка
    reverse() {
        let prev = null;
        let current = this.head;
        let next = null;

        while (current !== null) {
            // Сохраняем ссылку на следующий узел
            next = current.next;

            // Переводим текущий узел в обратном направлении
            current.next = prev;

            // Сдвигаем указатели
            prev = current;
            current = next;
        }

        // Новый head списка — это последний узел
        this.head = prev;
    }

    // Метод для вывода элементов списка
    print() {
        let current = this.head;
        let result = [];

        while (current !== null) {
            result.push(current.data);
            current = current.next;
        }

        console.log(result.join(' -> '));
    }
}

// Пример использования:

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

console.log("Original List:");
list.print(); // 1 -> 2 -> 3 -> 4 -> 5

list.reverse();

console.log("Reversed List:");
list.print(); // 5 -> 4 -> 3 -> 2 -> 1


// 38. Find the Middle Element of a Linked List
// Найти середину связанного списка.

class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function findMiddle(head) {
    if (!head) return null; // Если список пуст, возвращаем null

    let slow = head; // Медленный указатель
    let fast = head; // Быстрый указатель

    while (fast !== null && fast.next !== null) {
        slow = slow.next; // Двигаем медленный указатель на один узел 10, 15, 20
        fast = fast.next.next; // Двигаем быстрый указатель на два узла 15, 25, 35
    }

    return slow; // Медленный указатель указывает на середину
}

// Пример 1: 5 -> 10 -> 15 -> 20 -> 25 -> 30 -> 35
let head8 = new ListNode(5);
head8.next = new ListNode(10);
head8.next.next = new ListNode(15);
head8.next.next.next = new ListNode(20);
head8.next.next.next.next = new ListNode(25);
head8.next.next.next.next.next = new ListNode(30);
head8.next.next.next.next.next.next = new ListNode(35);
console.log("Середина списка:", findMiddle(head8).data); // 20

// 39. Find the Intersection of Two Linked Lists
// Найти точку пересечения двух связанных списков.

class Node {
    constructor(data) {
        this.data = data;  // Данные узла
        this.next = null;   // Указатель на следующий узел
    }
}

class LinkedList {
    constructor() {
        this.head = null;  // Начало списка
    }

    // Метод для добавления элемента в конец списка
    append(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Метод для нахождения точки пересечения двух списков
    static findIntersection(list1, list2) {
        let length1 = 0;
        let length2 = 0;
        let current1 = list1.head;
        let current2 = list2.head;

        // Считаем длины обоих списков
        while (current1 !== null) {
            length1++;
            current1 = current1.next;
        }

        while (current2 !== null) {
            length2++;
            current2 = current2.next;
        }

        // Сдвигаем указатель на более длинном списке
        current1 = list1.head;
        current2 = list2.head;

        // Выравниваем оба списка по длине
        if (length1 > length2) {
            for (let i = 0; i < length1 - length2; i++) {
                current1 = current1.next;
            }
        } else if (length2 > length1) {
            for (let i = 0; i < length2 - length1; i++) {
                current2 = current2.next;
            }
        }

        // Теперь сравниваем узлы обоих списков
        while (current1 !== null && current2 !== null) {
            if (current1 === current2) {
                return current1; // Точка пересечения
            }
            current1 = current1.next;
            current2 = current2.next;
        }

        return null; // Нет пересечения
    }
}

// Пример использования:

const list1 = new LinkedList();
list1.append(1);
list1.append(2);
list1.append(3);
list1.append(4);
list1.append(5);

const list2 = new LinkedList();
list2.append(6);
list2.append(7);

// Создаем точку пересечения
const intersectionNode = list1.head.next.next; // Узел с данными 3
list2.head.next.next = intersectionNode; // Пересечение на узле с данными 3

const intersection = LinkedList.findIntersection(list1, list2);

if (intersection) {
    console.log("Intersection at node with data:", intersection.data); // 3
} else {
    console.log("No intersection.");
}


// 40. Find the First Non-Repeated Character in a String
// Найти первый неповторяющийся символ в строке.

function findFirstNonRepeatedCharacter(str) {
    const charCount = {};  // Объект для подсчета вхождений символов

    // Подсчитываем количество каждого символа в строке
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Проходим по строке еще раз и ищем первый неповторяющийся символ
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (charCount[char] === 1) {
            return char;  // Возвращаем первый неповторяющийся символ
        }
    }

    return null;  // Если нет неповторяющихся символов, возвращаем null
}

// Пример использования:
console.log(findFirstNonRepeatedCharacter("swiss"));  // "w"
console.log(findFirstNonRepeatedCharacter("racecar"));  // "e"
console.log(findFirstNonRepeatedCharacter("aabbcc"));  // null


// 41. Longest Palindromic Substring
// Найти самую длинную палиндромную подстроку в строке.

function longestPalindrome(s) {
    if (s.length <= 1) {
        return s;  // Строка из одного символа уже является палиндромом
    }

    let start = 0;  // Начало самой длинной палиндромной подстроки
    let maxLength = 1;  // Максимальная длина палиндрома

    // Функция для расширения от центра
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        // Возвращаем длину найденной палиндромной подстроки
        return right - left - 1;
    }

    // Проходим по всем возможным центрам
    for (let i = 0; i < s.length; i++) {
        // Проверяем палиндром с центром в одном символе
        let len1 = expandAroundCenter(i, i);
        // Проверяем палиндром с центром между двумя символами
        let len2 = expandAroundCenter(i, i + 1);

        // Выбираем наибольшую длину палиндрома
        let len = Math.max(len1, len2);

        if (len > maxLength) {
            maxLength = len;
            start = i - Math.floor((len - 1) / 2);  // Индекс начала палиндрома
        }
    }

    // Возвращаем самую длинную палиндромную подстроку
    return s.substring(start, start + maxLength);
}

// Пример использования:
console.log(longestPalindrome("babad"));  // "bab" или "aba"
console.log(longestPalindrome("cbbd"));   // "bb"
console.log(longestPalindrome("a"));      // "a"
console.log(longestPalindrome("ac"));     // "a"

function longestPalindrome(s) {
    if (s.length <= 1) return s;

    let start = 0;
    let maxLength = 1;

    for (let i = 0; i < s.length; i++) {
        // Расширение для нечетного числа символов
        let len1 = 0;
        let left1 = i;
        let right1 = i;
        while (left1 >= 0 && right1 < s.length && s[left1] === s[right1]) {
            len1++;
            left1--;
            right1++;
        }

        // Расширение для четного числа символов
        let len2 = 0;
        let left2 = i;
        let right2 = i + 1;
        while (left2 >= 0 && right2 < s.length && s[left2] === s[right2]) {
            len2++;
            left2--;
            right2++;
        }

        // Выбираем наибольшую длину
        let len = Math.max(len1, len2);
        if (len > maxLength) {
            maxLength = len;
            start = i - Math.floor((len - 1) / 2);
        }
    }

    return s.substring(start, start + maxLength);
}

// Пример использования:
console.log(longestPalindrome("babad"));  // "bab" или "aba"
console.log(longestPalindrome("cbbd"));   // "bb"
console.log(longestPalindrome("a"));      // "a"
console.log(longestPalindrome("ac"));     // "a"



// 42. Find the Kth Largest Element in an Array
// Найти k-й по величине элемент в массиве.

function findKthLargest(nums, k) {
    // Сортируем массив в порядке убывания
    nums.sort((a, b) => b - a);
    // Возвращаем k-й по величине элемент (индексация с 0, поэтому k-1)
    return nums[k - 1];
}

// Пример использования:
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));  // 5
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));  // 4


function quickSelect(nums, left, right, k) {
    const pivot = nums[Math.floor((left + right) / 2)];
    let i = left, j = right;

    while (i <= j) {
        while (nums[i] > pivot) i++;
        while (nums[j] < pivot) j--;

        if (i <= j) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
            j--;
        }
    }

    if (left <= j && k <= j) {
        return quickSelect(nums, left, j, k);
    }
    if (i <= right && k >= i) {
        return quickSelect(nums, i, right, k);
    }

    return nums[k];
}

function findKthLargest(nums, k) {
    return quickSelect(nums, 0, nums.length - 1, k - 1);
}

// Пример использования:
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));  // 5
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));  // 4


// 43. Flatten a Binary Tree
// Превратить бинарное дерево в линейный список.

function flatten(root) {

    if (!root) return;

    const stack = [root];

    while (stack.length > 0) {
        const current = stack.pop();

        // Если есть правый потомок, помещаем его в стек
        if (current.right) {
            stack.push(current.right);
        }

        // Если есть левый потомок, помещаем его в стек
        if (current.left) {
            stack.push(current.left);
        }

        // Преобразуем узел
        current.left = null; // Левый потомок становится null
        if (stack.length > 0) {
            current.right = stack[stack.length - 1]; // Правый потомок устанавливаем на следующий узел в стеке
        }
    }

}


function flatten(root) {
    if (!root) return null;

    // Рекурсивно flatten левое и правое поддерево
    const left = flatten(root.left);
    const right = flatten(root.right);

    // Если есть левое поддерево, присоединяем его к правому
    if (left) {
        left.right = root.right; // Присоединяем правое поддерево к концу левого
        root.right = root.left;   // Перемещаем левое поддерево на место правого
        root.left = null;         // Убираем левое поддерево
    }

    // Возвращаем корень (в данном случае это не нужно, но может быть полезно)
    return root;
}

// Пример использования
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Создание дерева
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(5);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right.right = new TreeNode(6);

// Преобразование в линейный список
flatten(root);

// Вывод результата
let current = root;
while (current) {
    console.log(current.val); // Вывод: 1, 2, 3, 4, 5, 6
    current = current.right;
}




// 44. Max Depth of a Binary Tree
// Найти максимальную глубину бинарного дерева.

// Определение структуры узла бинарного дерева
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function maxDepth(root) {
    // Базовый случай: если узел пустой, глубина = 0
    if (root === null) {
        return 0;
    }

    // Рекурсивно вычисляем глубину левого и правого поддеревьев
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    // Возвращаем максимальную глубину между левым и правым поддеревьями плюс 1 для текущего узла
    return Math.max(leftDepth, rightDepth) + 1;
}

// Пример использования:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(maxDepth(root));  // 3

// BFS SEARCH

function maxDepth(root) {
    if (root === null) {
        return 0;
    }

    let queue = [root];
    let depth = 0;

    while (queue.length > 0) {
        let levelSize = queue.length;
        depth++;

        for (let i = 0; i < levelSize; i++) {
            let currentNode = queue.shift();
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
    }

    return depth;
}

// Пример использования:
console.log(maxDepth(root));  // 3

// 45. Find the Lowest Common Ancestor in a Binary Search Tree
// Найти наименьшего общего предка в бинарном дереве поиска.

// Определение структуры узла бинарного дерева
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function lowestCommonAncestor(root, p, q) {
    // Если корень пустой, возвращаем null
    if (root === null) {
        return null;
    }

    // Если значения p и q меньше текущего узла, ищем в левом поддереве
    if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q);
    }

    // Если значения p и q больше текущего узла, ищем в правом поддереве
    if (p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right, p, q);
    }

    // Если p и q находятся по разные стороны от текущего узла, значит текущий узел — общий предок
    return root;
}

// Пример использования:
const root = new TreeNode(6);
root.left = new TreeNode(2);
root.right = new TreeNode(8);
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(4);
root.left.right.left = new TreeNode(3);
root.left.right.right = new TreeNode(5);
root.right.left = new TreeNode(7);
root.right.right = new TreeNode(9);

const p = root.left;  // Узел с значением 2
const q = root.left.right.right;  // Узел с значением 5

console.log(lowestCommonAncestor(root, p, q).val);  // 2

// 46. Find the Longest Common Subsequence (LCS)
// Найти наибольшую общую подпоследовательность двух строк.

function longestCommonSubsequence(s1, s2) {
    const m = s1.length;
    const n = s2.length;

    // Создаем двумерный массив для хранения длин LCS
    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

    // Заполняем таблицу dp
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;  // Символы совпали
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);  // Символы не совпали
            }
        }
    }

    // Восстанавливаем LCS
    let lcs = '';
    let i = m;
    let j = n;

    while (i > 0 && j > 0) {
        if (s1[i - 1] === s2[j - 1]) {
            lcs = s1[i - 1] + lcs;  // Добавляем символ в начало
            i--;
            j--;
        } else if (dp[i - 1][j] >= dp[i][j - 1]) {
            i--;
        } else {
            j--;
        }
    }

    return lcs;
}

// Пример использования:
const s1 = "ABCBDAB";
const s2 = "BDCABB";

console.log(longestCommonSubsequence(s1, s2));  // "BDAB"


// 47. Check if Two Strings are Rotations of Each Other
// Проверить, являются ли две строки вращениями друг друга.

function areRotations(str1, str2) {
    // Если строки не одинаковой длины, они не могут быть вращениями друг друга
    if (str1.length !== str2.length) {
        return false;
    }

    // Проверяем, является ли str2 подстрокой строки str1, соединенной с самой собой
    return (str1 + str1).includes(str2);
}

// Примеры использования:
console.log(areRotations("abc", "cab")); // true
console.log(areRotations("abc", "acb")); // false
console.log(areRotations("abcd", "dabc")); // true
console.log(areRotations("hello", "elloh")); // true


// 48. Find the Peak Element
// Найти пик (максимальный элемент) в массиве, который больше или равен соседям.

function findPeakElement(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        // Проверяем, является ли средний элемент пиковым
        if ((mid === 0 || nums[mid] >= nums[mid - 1]) && (mid === nums.length - 1 || nums[mid] >= nums[mid + 1])) {
            return mid;
        }

        // Если элемент слева больше, ищем в левой части массива
        if (mid > 0 && nums[mid] < nums[mid - 1]) {
            right = mid - 1;
        }
        // Если элемент справа больше, ищем в правой части массива
        else {
            left = mid + 1;
        }
    }

    return -1; // в случае, если массив пуст
}

// Примеры:
console.log(findPeakElement([1, 2, 3, 1])); // 2 (элемент 3 является пиковым)
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4])); // 5 или 6 (оба являются пиковыми)
console.log(findPeakElement([1, 2, 3, 4, 5])); // 4 (элемент 5 является пиковым)


// 49. Count the Number of Set Bits (1s) in an Integer
// Посчитать количество единичных битов в числе.

function countSetBits(n) {
    let count = 0;

    while (n > 0) {
        // Побитовое И с 1 позволяет проверять младший бит
        count = count + (n & 1);

        // Сдвигаем число вправо на 1 бит
        n = n >> 1;
    }

    return count;
}

// Примеры:
console.log(countSetBits(9)); // 2 (9 в двоичной форме: 1001)
console.log(countSetBits(15)); // 4 (15 в двоичной форме: 1111)
console.log(countSetBits(128)); // 1 (128 в двоичной форме: 10000000)
console.log(countSetBits(7)); // 3 (7 в двоичной форме: 111)


// 50. Find the Shortest Path in a Grid
// Найти кратчайший путь в сетке (например, используя алгоритм поиска в ширину).


function shortestPathInGrid(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    // Проверяем, если начальная или конечная клетка непроходима
    if (grid[0][0] === 1 || grid[rows - 1][cols - 1] === 1) {
        return -1; // Невозможно пройти
    }

    // Направления движения (вверх, вниз, влево, вправо)
    const directions = [
        [-1, 0], // вверх
        [1, 0],  // вниз
        [0, -1], // влево
        [0, 1],  // вправо
    ];

    // Очередь для BFS и массив для отслеживания посещённых клеток
    let queue = [[0, 0, 0]]; // [x, y, distance]
    let visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    visited[0][0] = true;

    // BFS
    while (queue.length > 0) {
        const [x, y, dist] = queue.shift();

        // Если мы достигли целевой клетки
        if (x === rows - 1 && y === cols - 1) {
            return dist;
        }

        // Проходим по всем соседним клеткам
        for (let [dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;

            // Проверяем, что новая клетка в пределах сетки и доступна
            if (newX >= 0 && newX < rows && newY >= 0 && newY < cols &&
                !visited[newX][newY] && grid[newX][newY] === 0) {
                visited[newX][newY] = true;
                queue.push([newX, newY, dist + 1]);
            }
        }
    }

    return -1; // Если путь не найден
}

// Пример использования:
const grid1 = [
    [0, 1, 0],
    [0, 1, 0],
    [0, 0, 0]
];

console.log(shortestPathInGrid(grid1)); // 4 (путь: [0,0] -> [1,0] -> [2,0] -> [2,1] -> [2,2])

const grid2 = [
    [0, 1],
    [1, 0]
];

console.log(shortestPathInGrid(grid2)); // 2 (путь: [0,0] -> [1,1])


// 51 Debounce(lazy-loading) function
// Реализовать debounce функцию

const debounce = (callback, delay) => {
    let timer = null;

    return (...args) => {
        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(() => {
            callback(...args);
        }, delay);
    }
}

const fetch = (url) => {
    console.log(`fetch by ${url}`);
}

const fetching1 = debounce(fetch, 300);

fetching1('url1')
fetching1('url2')
fetching1('url3')


// 52 matrix.T - Транспонирование матрицы

function transpose(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    // Создаем новую матрицу с количеством строк и столбцов, перевернутым местами
    const transposed = [];

    // Проходим по столбцам исходной матрицы
    for (let col = 0; col < cols; col++) {
        transposed[col] = [];
        // Проходим по строкам исходной матрицы
        for (let row = 0; row < rows; row++) {
            transposed[col][row] = matrix[row][col];
        }
    }

    return transposed;
}

// Пример использования:
const matrix = [
    [1, 2, 3],
    [4, 5, 6]
];

const transposedMatrix = transpose(matrix);
console.log(transposedMatrix);
// Результат:
// [
//   [1, 4],
//   [2, 5],
//   [3, 6]
// ]


// 53 Алгоритм Дейкстры

function dijkstra(graph, start) {
    const distances = {}; // Словарь для хранения минимальных расстояний
    const visited = new Set(); // Множество для отслеживания посещённых вершин
    const priorityQueue = []; // Очередь с приоритетом

    // Инициализируем все расстояния как бесконечность
    for (let node in graph) {
        distances[node] = Infinity;
    }
    distances[start] = 0; // Начальная вершина имеет расстояние 0

    // Добавляем начальную вершину в очередь
    priorityQueue.push([start, 0]);

    while (priorityQueue.length > 0) {
        // Сортируем очередь по расстоянию
        priorityQueue.sort((a, b) => a[1] - b[1]);

        // Извлекаем вершину с минимальным расстоянием
        const [currentNode, currentDistance] = priorityQueue.shift();

        // Если вершина уже посещена, пропускаем её
        if (visited.has(currentNode)) {
            continue;
        }
        visited.add(currentNode);

        // Обновляем расстояния для соседей
        for (let neighbor in graph[currentNode]) {
            const distanceToNeighbor = graph[currentNode][neighbor];
            const newDistance = currentDistance + distanceToNeighbor;

            // Если найден более короткий путь, обновляем расстояние
            if (newDistance < distances[neighbor]) {
                distances[neighbor] = newDistance;
                priorityQueue.push([neighbor, newDistance]);
            }
        }
    }

    return distances;
}

// Пример графа с весами рёбер
const graph = {
    A: { B: 1, C: 4 },
    B: { A: 1, C: 2, D: 5 },
    C: { A: 4, B: 2, D: 1 },
    D: { B: 5, C: 1 }
};

const startNode = 'A';
const result = dijkstra(graph, startNode);

console.log(result); // { A: 0, B: 1, C: 3, D: 4 }

// 54 Алгоритм из билетов составить маршрут полетов

function findItinerary(tickets) {
    const graph = {};

    // Строим граф из билетов
    tickets.forEach(ticket => {
        const [from, to] = ticket;
        if (!graph[from]) {
            graph[from] = [];
        }
        graph[from].push(to);
    });

    // Для каждого города сортируем по алфавиту (для правильного порядка)
    for (let city in graph) {
        graph[city].sort();
    }

    const result = [];

    function dfs(city) {
        // Пока есть рейсы из текущего города, идем по очереди
        while (graph[city] && graph[city].length > 0) {
            // Берем следующий рейс (в алфавитном порядке)
            const nextCity = graph[city].shift();
            dfs(nextCity); // Рекурсивно ищем следующий маршрут
        }
        // Когда не осталось рейсов, добавляем город в маршрут
        result.unshift(city);
    }

    // Стартуем с города 'JFK' (начальная точка)
    dfs('JFK');

    return result;
}

// Пример билетов
const tickets = [
    ['MUC', 'LHR'],
    ['JFK', 'MUC'],
    ['SFO', 'SJC'],
    ['LHR', 'SFO'],
    ['JFK', 'SFO']
];

const itinerary = findItinerary(tickets);
console.log(itinerary); // ["JFK", "MUC", "LHR", "SFO", "SJC"]



// 56 Алгоритм бинарного поиска
function binarySearch(arr, target) {
    let left = 0; // Левая граница
    let right = arr.length - 1; // Правая граница

    while (left <= right) {
        const mid = Math.floor((left + right) / 2); // Находим середину массива

        // Если нашли элемент
        if (arr[mid] === target) {
            return mid; // Возвращаем индекс найденного элемента
        }

        // Если элемент меньше, чем в середине, ищем в левой половине
        if (arr[mid] > target) {
            right = mid - 1;
        }
        // Если элемент больше, чем в середине, ищем в правой половине
        else {
            left = mid + 1;
        }
    }

    return -1; // Если элемент не найден, возвращаем -1
}

// Пример использования
const arr = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 7;

const result = binarySearch(arr, target);
if (result !== -1) {
    console.log(`Элемент найден на индексе ${result}`);
} else {
    console.log('Элемент не найден');
}

