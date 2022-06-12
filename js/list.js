const listProgress = document.querySelector("#listProgress");
const listObject = document.querySelector("#listObject");

const savedValue = localStorage.getItem("value");

if(savedValue !== null) {
  listProgress.value = savedValue;
  let newValue = (savedValue / 10) * 100;
  listObject.innerText = `${newValue}%`;
  if(savedValue >= 10) {
    listObject.innerText = `${newValue} %   ➜ 펀딩 종료!`;
  }
}