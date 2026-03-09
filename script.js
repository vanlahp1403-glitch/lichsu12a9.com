
// Proxy endpoint (deploy on Vercel)
const API_URL = "https://YOUR-VERCEL-PROXY.vercel.app/api";

let controller;

const container = document.querySelector(".container");
const chatsContainer = document.querySelector(".chats-container");
const promptForm = document.querySelector(".prompt-form");
const promptInput = document.querySelector(".prompt-input");

const createMessageElement = (content, ...classes) => {
  const div = document.createElement("div");
  div.classList.add("message", ...classes);
  div.innerHTML = content;
  return div;
};

const scrollToBottom = () =>
container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });

async function generateResponse(botMsgDiv, message){

const textElement = botMsgDiv.querySelector(".message-text");

try{

const response = await fetch(API_URL,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({message})
});

const data = await response.json();

const text =
data?.candidates?.[0]?.content?.parts?.[0]?.text ||
"Xin lỗi, tôi chưa có câu trả lời.";

textElement.textContent = text;

}catch(err){

textElement.textContent="Lỗi kết nối AI.";
textElement.style.color="red";

}

}

function addUserMessage(text){

const userHTML = `<p class="message-text"></p>`;

const userDiv = createMessageElement(userHTML,"user-message");

userDiv.querySelector(".message-text").textContent = text;

chatsContainer.appendChild(userDiv);

scrollToBottom();

}

function addBotLoading(){

const botHTML = `
<img class="avatar" src="gemini.svg"/>
<p class="message-text">Đang suy nghĩ...</p>
`;

const botDiv = createMessageElement(botHTML,"bot-message");

chatsContainer.appendChild(botDiv);

scrollToBottom();

return botDiv;

}

promptForm.addEventListener("submit", e=>{

e.preventDefault();

const message = promptInput.value.trim();

if(!message) return;

promptInput.value="";

addUserMessage(message);

const botDiv = addBotLoading();

generateResponse(botDiv,message);

});
