/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    // Make a and b equal length
    while(a.length != b.length) {
        if(a.length < b.length) {
            a = '0' + a;
        }
        else {
            b = '0' + b;
        }
    }
    // Sum a and b
    binSum = '';
    carry = '0';
    for(var i = a.length - 1; i >= 0; i--) {
        if(a[i] == '1' && b[i] == '1') {
            if(carry == '1') {
                binSum = '1' + binSum;
            }
            else {
                binSum = '0' + binSum;
                carry = '1'
            }
        }
        else if (a[i] == '1' && b[i] == '0') {
            if(carry == '1') {
                binSum = '0' + binSum;
            }
            else {
                binSum = '1' + binSum;
            }
        }
        else if (a[i] == '0' && b[i] == '1') {
            if(carry == '1') {
                binSum = '0' + binSum;
            }
            else {
                binSum = '1' + binSum;
            }
        }
        else {
            if(carry == '1') {
                binSum = '1' + binSum;
                carry = '0';
            }
            else {
                binSum = '0' + binSum;
            }
        }
    }
    if(carry == '1') {
        binSum = '1' + binSum;
    }
    return binSum;
};