const firstValue = document.getElementById('first');
const secondValue = document.getElementById('second');

const submitForm = document.getElementById('form');
const output = document.getElementById('output');

document.getElementById("sub").addEventListener("click",sub);


//곱셈 결과
const multi_result = document.getElementById('multi_result');
// 결과값 출력 핸들러
const formSubmitHandler = (event) => {
  event.preventDefault();

  // 덧셈 함수 호출
  const result = add(Number(firstValue.value), Number(secondValue.value));

  // 결과 값 출력
  output.textContent = result;
};

submitForm.addEventListener('submit', formSubmitHandler);

// 덧셈 함수
const add = (a, b) => a + b;

// 뺄셈 함수
function sub() {
  const result = (Number(firstValue.value))-(Number(secondValue.value));
  output.textContent = result;
}
//곱셈 함수
const mult = function(a,b){
  const result = Number(firstValue.value) * Number(secondValue.value);
  multi_result.textContent = `${Number(firstValue.value)} x ${Number(secondValue.value)} = ${result}`;
}
document.getElementById("multi").onclick = mult;
