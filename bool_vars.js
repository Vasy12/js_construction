/**
 *
 * @param {boolean} test
 * @returns {string}
 */
function varIsTrueLongVersion(test) {

    if (test) {
        return 'Верно';
    } else {
        return 'Неверно';
    }
}

console.log('varIsTrueLongVersion( true)=', varIsTrueLongVersion(true));
console.log('varIsTrueLongVersion( false)=', varIsTrueLongVersion(false));

/**
 *
 * @param {boolean} test
 * @returns {string}
 */
function varIsTrueShortVersion(test) {
    return test ? 'Верно' : 'Неверно';
}

console.log('varIsTrueShortVersion( true)=', varIsTrueShortVersion(true));
console.log('varIsTrueShortVersion( false)=', varIsTrueShortVersion(false));

/**
 *
 * @param {boolean} test
 * @returns {string}
 */
function varIsNotTrueLongVersion(test) {
    if (!test) {
        return 'Верно';
    } else {
        return 'Неверно';
    }
}

console.log('varIsNotTrueLongVersion( true)=', varIsNotTrueLongVersion(true));
console.log('varIsNotTrueLongVersion( false)=', varIsNotTrueLongVersion(false));

/**
 *
 * @param {boolean} test
 * @returns {string}
 */
function varIsNotTrueShortVersion(test) {
    return !test ? 'Верно' : 'Неверно';
}

console.log('varIsNotTrueShortVersion( true)=', varIsNotTrueShortVersion(true));
console.log('varIsNotTrueShortVersion( false)=', varIsNotTrueShortVersion(false));

/**
 *
 * @param {number} a
 * @returns {string}
 */
function variable1(a) {
    if (a > 0 && a < 5) {
        return 'Верно';
    } else {
        return 'Неверно';
    }
}

console.log('variable1( 5 )=', variable1(5));
console.log('variable1( 0 )=', variable1(0));
console.log('variable1( -3 )=', variable1(-3));
console.log('variable1( 2 )=', variable1(2));

/**
 *
 * @param {number} a
 * @returns {number}
 */
function variable2(a) {
    if (a === 0 || a === 2) {
        a = a + 7;
    } else {
        a = a / 10;
    }
    return a;
}

console.log('variable2( 5 )=', variable2(5));
console.log('variable2( 0 )=', variable2(0));
console.log('variable2( -3 )=', variable2(-3));
console.log('variable2( 2 )=', variable2(2));

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function variable3(a, b) {
    if (a <= 1 && b >= 3) {
       return  a + b;
    } else {
        return  a - b;
    }
}

console.log('variable3( 1 , 3 )=', variable3(1,3));
console.log('variable3( 0 , 6 )=', variable3(0, 6));
console.log('variable3( 3, 5)=', variable3(3, 5));


/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {string}
 */
function variable4(a, b) {
    if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
        return 'Верно';
    } else {
        return 'Неверно';
    }
}

console.log('variable4( 3 , 7 )=', variable4(3,7));
console.log('variable4( 0 , 6 )=', variable4(0, 6));
console.log('variable4( 10, 6)=', variable4(10, 6));