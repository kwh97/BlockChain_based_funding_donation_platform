const notice = document.querySelector("#notice");
const h3 = document.querySelector("#notice_h3");
const h4 = document.querySelector("#notice_h4");
const receiverHash = document.querySelector(".receiver_hash");

const savedValue = localStorage.getItem("receiverInfo");

if(savedValue !== null) {
  h3.innerText = "📌 수령자 김철수, 수령완료!"
  h4.innerText = "✔수혜자가 정상적으로 수령을 완료하였습니다."
  let h4Coment = document.createElement('h4');
  h4Coment.innerText = "✔전달 날짜: 2022/06/13, 물품전달[가전제품], 세종기부단체";
  notice.appendChild(h4Coment);
  receiverHash.style.display = 'block';
}
