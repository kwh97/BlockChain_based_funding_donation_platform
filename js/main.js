// 블록체인 만들기
const SHA256 = CryptoJS.SHA256;

class Block {
  constructor(index, timestampm, data, previousHash = "") {
    this.index = index;
    this.timestampm = timestampm;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
    this.nonce = 0;
  }

  calculateHash() {
    return SHA256(
      this.index +
        this.previousHash +
        this.timestampm +
        JSON.stringify(this.data) +
        this.nonce
    ).toString();
  }

  mineBlock(difficulty) {
    while (
      this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")
    ) {
      this.nonce++;
      this.hash = this.calculateHash();
    }
  }
}

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.difficulty = 2;
  }

  createGenesisBlock() {
    return new Block(0, "01/01/2017", "Genesis block", "0");
  }

  getLastestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
    newBlock.previousHash = this.getLastestBlock().hash;
    newBlock.mineBlock(this.difficulty);
    this.chain.push(newBlock);
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }
      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
    }

    return true;
  }

  time(){
    return this.getLastestBlock().timestampm;
  }

  hash(){
    return this.getLastestBlock().hash;
  }

  data(){
    return this.getLastestBlock().data;
  }

  coin(){
    return JSON.stringify(markCoin, null, 4);
  }
}

let markCoin = new Blockchain();

markCoin.addBlock(new Block(1, "10/08/2017", { amount : 4 }));

markCoin.addBlock(new Block(2, "06/13/2022", { amount: "수혜자: 김철수, 수령완료" }));

console.log(JSON.stringify(markCoin, null, 10));

console.log(markCoin.data());




// single element


const form = document.querySelector("#todo-form");


// multiple elements
const items = document.querySelectorAll(".item");

const todos = document.querySelector("#todo-list");

const BlockChain_1 = markCoin.time();
const BlockChain_2 = Object.values(markCoin.data());


const button = document.querySelector(".submit");
const todoInput = document.querySelector("#todo-input");
const msg = document.querySelector("#msg");
button.addEventListener("click", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (todoInput.value === "") {
    msg.style.display = "block";
    setTimeout(() => (msg.style.display = "none"), 2000);
    return;
  }

  if (todoInput.value === markCoin.hash()) {

    //추가 작성코드
    let jsonObj = JSON.stringify(markCoin, null, 10);
    eval(`jsonObj = ${jsonObj}`);
    let receiverInfo = jsonObj.chain[2];
    localStorage.setItem("receiverInfo", receiverInfo);
    handleReceiverInfo();

  } else {

    msg.style.display = "block";
    setTimeout(() => (msg.style.display = "none"), 20000);
    return;

  }

  const li = document.createElement("li");
  li.appendChild(document.createTextNode(todoInput.value));
  todos.appendChild(li);
  todoInput.value = "";
}

function handleReceiverInfo() {
  const li = document.createElement("li");
  const li_2 = document.createElement("li_2");
  li.appendChild(document.createTextNode("전달 날자 : " + BlockChain_1));
  todos.appendChild(li);
  li_2.appendChild(document.createTextNode(BlockChain_2));
  todos.appendChild(li_2);
  todoInput.value = "수령 확인되었습니다. 감사합니다^^";
}


//추가 작성코드 : 새로고침시 계속 유지되게..
const savedValue = localStorage.getItem("receiverInfo");

if(savedValue !== null) {
  handleReceiverInfo();
}