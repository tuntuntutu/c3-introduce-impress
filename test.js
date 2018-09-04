function fun(str, num1, num2, msg, num0, object) {
  num0 = function (num2) {
    return (num2 < num1 ? '' : num0(parseInt(num2 / num1))) + ((num2 = num2 % num1) > 35 ? String.fromCharCode(num2 + 29) : num2.toString(36))
  };
  if (!''.replace(/^/, String)) {
    while (num2--) {
      object[num0(num2)] = msg[num2] || num0(num2)
    }
    msg = [function (num0) {
      return object[num0]
    }];
    num0 = function () {
      return '\\w+'
    };
    num2 = 1
  }
  while (num2--) {
    if (msg[num2]) {
      str = str.replace(new RegExp('\\b' + num0(num2) + '\\b', 'g'), msg[num2])
    }
  }
  return str
}