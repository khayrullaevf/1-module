// 1.Uch xonali son yasash:

function createThreeDigitNumber(a, b, c) {

    if (a <= 0 || b <= 0 || c <= 0) {

        return 0;

    }

    return 100*a + 10*b + c;

}

// 2.Haftaning kunini aniqlash:

function dayOfWeek(n) {

    const days = ['none', 'Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba', 'Yakshanba'];

    return days[n] || 'none';

}

// 3.Kabisa yilini aniqlash:

function isLeapYear(year) {

    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

}

// 4.Raqamning xonalari sonini aniqlash:

function digitCount(a) {

    if (a >= 1 && a <= 9) return 1;

    if (a >= 10 && a <= 99) return 2;

    if (a >= 100 && a <= 999) return 3;

    return 'Outside range';

}

// 5.Sonlarning musbatligini tekshirish:
function allPositive(a, b, c, d) {

    return a > 0 && b > 0 && c > 0 && d > 0;

}

// 6.0 dan a gacha bo'lgan sonlar yig'indisini topish:

function sumUpTo(a) {

    let sum = 0;

    for (let i = 0; i <= a; i++) {

        sum += i;

    }

    return sum;

}

// 7.Mukammal raqamni aniqlash:

function isPerfectNumber(n) {

    let sum = 0;

    for (let i = 1; i < n; i++) {

        if (n % i === 0) {

            sum += i;

        }

    }

    return sum === n;

}

// 8.Raqamlar sonini topish:

function numberOfDigits(n) {

    return n.toString().length;

}

// 9.Palindrom sonni aniqlash:

function isPalindrome(n) {

    const str = n.toString();

    for (let i = 0; i < str.length / 2; i++) {

        if (str[i] !== str[str.length - 1 - i]) {

            return false;

        }

    }

    return true;

}

// 10.Raqamlar yig'indisini topish:

function sumOfDigits(n) {

    return n.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);

}

// 11.Massivni teskarisiga aylantirish:

function reverseArray(arr) {

    return arr.slice().reverse();

}

// 12.Massivda nechta n soni borligini topish:

function countOccurrences(n, array) {

    return array.filter(item => item === n).length;

}

// 13.Ikkita element yig'indisi a ga teng bo'lishini aniqlash:

function findPairWithSum(a, array) {

    for (let i = 0; i < array.length; i++) {

        for (let j = i + 1; j < array.length; j++) {

            if (array[i] + array[j] === a) {

                return [array[i], array[j]];

            }

        }

    }

    return null;

}

// 14.Massivni o'sish tartibida joylashtirish:

function sortArray(array) {

    return array.slice().sort((a, b) => a - b);

}

//15. Massivdagi eng katta ikkinchi elementni topish:

function secondLargest(array) {

    let first = -Infinity, second = -Infinity;

    for (const num of array) {

        if (num > first) {

            second = first;

            first = num;

        } else if (num > second && num < first) {

            second = num;

        }

    }

    return second;

}

