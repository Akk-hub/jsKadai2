function isFizz(number, n1) {
  if (number % n1 === 0) {
    return true;
  }
  return false;
}
function isBuzz(number, n2) {
  if (number % n2 === 0) {
    return true;
  }
  return false;
}

const getNumber = () => {
  const num1_text = document.getElementById("num1").value;
  const num2_text = document.getElementById("num2").value;

  const num1 = Number(num1_text);
  const num2 = Number(num2_text);

  const target = document.getElementById("parent");
  target.innerHTML = "【出力】";

  if (isNaN(num1) || isNaN(num2)) {
    const element = document.createElement("div");
    target.appendChild(element);

    element.innerHTML = "整数値を入力してください。";
  } else {
    for (let i = 1; i < 100; i++) {
      fz = isFizz(i, num1);
      bz = isBuzz(i, num2);

      const element = document.createElement("div");
      target.appendChild(element);

      if (fz && bz) {
        element.innerHTML = "FizzBuzz " + i;
      } else if (fz) {
        element.innerHTML = "Fizz " + i;
      } else if (bz) {
        element.innerHTML = "Buzz " + i;
      }
    }
  }
};
