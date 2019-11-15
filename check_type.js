// 値の評価
check = function(obj) {
    if (obj) {
      return 'true';
    } else {
      return 'false';
    }
};

console.log('null           :' + check(null));
console.log('undefined      :' + check(undefined)); 
console.log('0              :' + check(0));
console.log('1              :' + check(1));
console.log('2              :' + check(2));
console.log('---');
console.log('null || 1      :' + (null || 1 ));
console.log('undefined || 1 :' + (undefined || 1));
console.log('0 || 1         :' + (0 || 1));
console.log('2 || 1         :' + (2 || 1));