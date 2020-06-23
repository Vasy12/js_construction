/**
 *
 * @param {number} a
 * @returns {string}
 */
function varIsZero1(a) {
    if (a === 0) {
        return 'Верно';
    } else {
        return 'Неверно';
    }
}
console.log('varIsZero1(1)=', varIsZero1(1));
console.log('varIsZero1(0)=', varIsZero1(0));
console.log('varIsZero1(-3)=', varIsZero1(-3));

/**
 *
 * @param {number} a
 * @returns {string}
 */
function varGreaterZero2(a) {
    if (a > 0) {
        return 'Верно';
    } else {
        return 'Неверно';
    }
}
console.log('varGreaterZero2(1)=', varGreaterZero2(1));
console.log('varGreaterZero2(0)=', varGreaterZero2(0));
console.log('varGreaterZero2(-3)=', varGreaterZero2(-3));

/**
 *
 * @param {number} a
 * @returns {string}
 */
function varLessZero3(a) {
    if (a < 0) {
        return 'Верно';
    } else {
        return 'Неверно';
    }
}
console.log('varLessZero3(1)=', varLessZero3(1));
console.log('varLessZero3(0)=', varLessZero3(0));
console.log('varLessZero3(-3)=', varLessZero3(-3));

/**
 *
 * @param {number} a
 * @returns {string}
 */
function varGreaterOrEqualZero4(a) {
    if (a >= 0) {
        return 'Верно';
    } else {
        return 'Неверно';
    }
}
console.log('varGreaterOrEqualZero4(1)=', varGreaterOrEqualZero4(1));
console.log('varGreaterOrEqualZero4(0)=', varGreaterOrEqualZero4(0));
console.log('varGreaterOrEqualZero4(-3)=', varGreaterOrEqualZero4(-3));

/**
 *
 * @param {number} a
 * @returns {string}
 */
function varLessOrEqualZero5(a) {
    if (a <= 0) {
        return 'Верно';
    } else {
        return 'Неверно';
    }
}
console.log('varLessOrEqualZero5(1)=', varLessOrEqualZero5(1));
console.log('varLessOrEqualZero5(0)=', varLessOrEqualZero5(0));
console.log('varLessOrEqualZero5(-3)=', varLessOrEqualZero5(-3));

/**
 *
 * @param {number} a
 * @returns {string}
 */
function varNotEqualZero6(a) {
    if (a !== 0) {
        return 'Верно';
    } else {
        return 'Неверно';
    }
}
console.log('varNotEqualZero6(1)=', varNotEqualZero6(1));
console.log('varNotEqualZero6(0)=', varNotEqualZero6(0));
console.log('varNotEqualZero6(-3)=', varNotEqualZero6(-3));

/**
 *
 * @param {string | number} a
 * @returns {string}
 */
function varEqualTest7(a) {
    if (a === 'test') {
        return 'Верно';
    } else {
        return 'Неверно';
    }
}
console.log('varEqualTest7(\'test\')=', varEqualTest7('test'));
console.log('varEqualTest7( \'тест\')=', varEqualTest7( 'тест'));
console.log('varEqualTest7(3)=', varEqualTest7(3));

/**
 *
 * @param {string | number} a
 * @returns {string}
 */
function varIsStringOne8(a) {
    if (a==='1') {
        return 'Верно';
    } else {
        return 'Неверно';
    }
}
console.log('varIsStringOne8("1")=', varIsStringOne8("1"));
console.log('varIsStringOne8(1)=', varIsStringOne8(1));
console.log('varIsStringOne8(3)=', varIsStringOne8(3));



