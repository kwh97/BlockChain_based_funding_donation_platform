const notice = document.querySelector("#notice");
const h3 = document.querySelector("#notice_h3");
const h4 = document.querySelector("#notice_h4");
const receiverHash = document.querySelector(".receiver_hash");

const savedValue = localStorage.getItem("receiverInfo");

if(savedValue !== null) {
  h3.innerText = "π μλ Ήμ κΉμ² μ, μλ Ήμλ£!"
  h4.innerText = "βμνμκ° μ μμ μΌλ‘ μλ Ήμ μλ£νμμ΅λλ€."
  let h4Coment = document.createElement('h4');
  h4Coment.innerText = "βμ λ¬ λ μ§: 2022/06/13, λ¬Όνμ λ¬[κ°μ μ ν], μΈμ’κΈ°λΆλ¨μ²΄";
  notice.appendChild(h4Coment);
  receiverHash.style.display = 'block';
}
