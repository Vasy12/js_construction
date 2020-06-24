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
console.log('varIsTrueLongVersion( true)=',varIsTrueLongVersion(true));
console.log('varIsTrueLongVersion( false)=',varIsTrueLongVersion(false));

/**
 *
 * @param {boolean} test
 * @returns {string}
 */
function varIsTrueShortVersion(test) {
    return test ? 'Верно' : 'Неверно';
}
console.log('varIsTrueShortVersion( true)=',varIsTrueShortVersion(true));
console.log('varIsTrueShortVersion( false)=',varIsTrueShortVersion(false));

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

console.log('varIsNotTrueLongVersion( true)=',varIsNotTrueLongVersion(true));
console.log('varIsNotTrueLongVersion( false)=',varIsNotTrueLongVersion(false));
/**
 *
 * @param {boolean} test
 * @returns {string}
 */
function varIsNotTrueShortVersion(test) {
    return !test ? 'Верно' : 'Неверно';
}
console.log('varIsNotTrueShortVersion( true)=',varIsNotTrueShortVersion(true));
console.log('varIsNotTrueShortVersion( false)=',varIsNotTrueShortVersion(false));
