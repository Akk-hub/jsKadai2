const getFizz = (number, n1) => {
  if (number % n1 === 0) {
    return true;
  }
  return false;
};
const getBuzz = (number, n2) => {
  if (number % n2 === 0) {
    return true;
  }
  return false;
};

const getNumber = () => {
  const fizzText = document.getElementById('num1').value;
  const buzzText = document.getElementById('num2').value;

  const fizz = Number(fizzText);
  const buzz = Number(buzzText);

  const target = document.getElementById('parent');
  target.innerHTML = '【出力】';

  if (isNaN(fizz) || isNaN(buzz)) {
    const element = document.createElement('div');
    target.appendChild(element);

    element.innerHTML = '整数値を入力してください。';
  } else {
    for (let i = 1; i < 100; i++) {
      fz = getFizz(i, fizz);
      bz = getBuzz(i, buzz);

      const element = document.createElement('div');
      target.appendChild(element);

      if (fz && bz) {
        element.innerHTML = 'FizzBuzz ' + i;
      } else if (fz) {
        element.innerHTML = 'Fizz ' + i;
      } else if (bz) {
        element.innerHTML = 'Buzz ' + i;
      }
    }
  }
};
