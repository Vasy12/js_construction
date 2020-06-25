/**
 *
 * @param {number} num
 * @returns {string}
 */
function getSeasonOfYearByNumber(num) {
    switch (num) {
        case 1:
            return 'зима';
        case 2:
            return 'весна';
        case 3:
            return 'лето';
        case 4:
            return 'осень';
        default:
            return 'неверный аргумент';
    }
}

console.log('getSeasonOfYearByNumber( 1 )=', getSeasonOfYearByNumber(1));
console.log('getSeasonOfYearByNumber( 2 )=', getSeasonOfYearByNumber(2));
console.log('getSeasonOfYearByNumber( 3 )=', getSeasonOfYearByNumber(3));
console.log('getSeasonOfYearByNumber( 4 )=', getSeasonOfYearByNumber(4));
console.log('getSeasonOfYearByNumber( 5 )=', getSeasonOfYearByNumber(5));

/**
 *
 * @param {number} day
 * @returns {number}
 */
function getMonthDecade(day) {
    if (day >= 1 && day <= 10) {
        return 1;
    } else if (day >= 11 && day <= 20) {
        return 2;
    } else if (day >= 21 && day <= 31) {
        return 3;
    }
    return 0;
}

console.log('getMonthDecade( 5 )=', getMonthDecade(5));
console.log('getMonthDecade( 16 )=', getMonthDecade(16));
console.log('getMonthDecade( 25 )=', getMonthDecade(25));

/**
 *
 * @param {number} month
 * @returns {string}
 */
function getSeasonOfYear(month) {
    if ((month >= 1 && month <= 2) || month === 12) {
        return 'зима';
    } else if (month >= 3 && month <= 5) {
        return 'весна';
    } else if (month >= 6 && month <= 8) {
        return 'лето';
    } else if (month >= 9 && month <= 11) {
        return 'осень';
    } else {
        return 'ошибка'
    }
}

console.log('getSeasonOfYear( 1 )=', getSeasonOfYear(1));
console.log('getSeasonOfYear( 3 )=', getSeasonOfYear(3));
console.log('getSeasonOfYear( 7 )=', getSeasonOfYear(7));
console.log('getSeasonOfYear( 10 )=', getSeasonOfYear(10));
console.log('getSeasonOfYear( 12 )=', getSeasonOfYear(12));

/**
 *
 * @param {string} str
 * @returns {string}
 */
function isFirstLetterA(str) {
    return str[0] === 'a' ? 'Да' : 'Нет';
}

console.log('isFirstLetterA( \'abcde\' )=', isFirstLetterA('abcde'));
console.log('isFirstLetterA( \'hello\' )=', isFirstLetterA('hello'));

/**
 *
 * @param {string} str
 * @returns {string}
 */
function isFirstLetterOneTwoThree(str) {
    const firstLetter = str[0];
    return firstLetter === '1' || firstLetter === '2' || firstLetter === '3' ? 'Да' : 'Нет';
}

console.log('isFirstLetterOneTwoThree( \'12345\' )=', isFirstLetterOneTwoThree('12345'));
console.log('isFirstLetterOneTwoThree( \'2345\' )=', isFirstLetterOneTwoThree('2345'));
console.log('isFirstLetterOneTwoThree( \'64353\' )=', isFirstLetterOneTwoThree('62345'));

/**
 *
 * @param {string} str
 * @returns {number}
 */
function sumThreeDigits(str) {
    return Number(str[0]) + Number(str[1]) + Number(str[2]);
}

console.log('sumThreeDigits( \'123\' )=', sumThreeDigits('123'));
console.log('sumThreeDigits( \'678\' )=', sumThreeDigits('678'));
console.log('sumThreeDigits( \'159\' )=', sumThreeDigits('159'));

/**
 *
 * @param {string} str
 * @returns {string}
 */
function sumFirstThreeDigitsEqualsSumLastThree(str) {
    const firstSum = Number(str[0]) + Number(str[1]) + Number(str[2]);
    const lastSum = Number(str[3]) + Number(str[4]) + Number(str[5]);
    return firstSum === lastSum ? 'Да' : 'Нет';
}

console.log('sumFirstThreeDigitsEqualsSumLastThree(\'123321\')=', sumFirstThreeDigitsEqualsSumLastThree('123321'));
console.log('sumFirstThreeDigitsEqualsSumLastThree(\'123456\')=', sumFirstThreeDigitsEqualsSumLastThree('123456'));
console.log('sumFirstThreeDigitsEqualsSumLastThree(\'437860\')=', sumFirstThreeDigitsEqualsSumLastThree('437860'));
