
const firstValue = document.getElementById('first');
const secondValue = document.getElementById('second');
const submitForm = document.getElementById('form');
const output = document.getElementById('output');

// 덧셈 함수
document.getElementById('add').addEventListener('click', () => {
  const result = add(Number(firstValue.value), Number(secondValue.value));
  output.textContent = `${result}`;
});

// 뺄셈 함수
document.getElementById('sub').addEventListener('click', () => {
  const result = subtract(Number(firstValue.value), Number(secondValue.value));
  output.textContent = `${result}`;
});

// 곱셈 함수
document.getElementById('mult').addEventListener('click', () => {
  const result = multiply(Number(firstValue.value), Number(secondValue.value));
  output.textContent = `${result}`;
});

// 나눗셈 함수
document.getElementById('div').addEventListener('click', () => {
  const result = divide(Number(firstValue.value), Number(secondValue.value));
  output.textContent = `${result}`;
});

// 덧셈
const add = (a, b) => a + b;

// 뺄셈
const subtract = (a, b) => a - b;

// 곱셈
const multiply = (a, b) => a * b;

// 나눗셈
const divide = (a, b) => {
  if (b === 0) {
    return "0으로 나눌 수 없습니다.";
  }
  return a / b;
};