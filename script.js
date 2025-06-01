function sendChatMessage() {
  const input = document.getElementById("chat-input");
  const messageText = input.value.trim();

  if (messageText === "") return;

  const renderer = document.createElement("yt-live-chat-text-message-renderer");

  const authorPhoto = document.createElement("div");
  authorPhoto.id = "author-photo";

  const content = document.createElement("div");
  content.id = "content";

  const timestamp = document.createElement("span");
  timestamp.id = "timestamp";
  timestamp.textContent = new Date().toLocaleTimeString().slice(0, 5);

  const chipAuthorName = document.createElement("yt-live-chat-author-chip");
  chipAuthorName.className = "style-scope yt-live-chat-text-message-renderer";
  const authorName = document.createElement("span");
  authorName.id = "author-name";
  authorName.textContent = "You";

  const message = document.createElement("span");
  message.id = "message";
  message.textContent = messageText;

  content.appendChild(timestamp);
  chipAuthorName.appendChild(authorName);
  content.appendChild(chipAuthorName);
  content.appendChild(message);

  renderer.appendChild(authorPhoto);
  renderer.appendChild(content);

  const chatList = document.querySelector("yt-live-chat-item-list-renderer");
  if (chatList) {
    chatList.appendChild(renderer);
    renderer.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  input.value = "";
}

function sendSuperChat() {
  const name = document.getElementById("sc-name").value.trim() || "Anonymous";
  const amount = parseFloat(document.getElementById("sc-amount").value);
  const message = document.getElementById("sc-message").value.trim();

  if (!amount || amount <= 0 || message === "") {
    alert("กรุณากรอกชื่อ จำนวนเงิน และข้อความให้ครบถ้วน");
    return;
  }

  let headerColor = "rgba(0, 184, 212, 1)";
  let contentColor = "rgba(0, 229, 255, 1)";
  if (amount >= 100) {
    headerColor = "rgba(208, 0, 0, 1)";
    contentColor = "rgba(230, 33, 23, 1)";
  }

  const renderer = document.createElement("yt-live-chat-paid-message-renderer");

  const header = document.createElement("div");
  header.id = "header";
  header.style.backgroundColor = headerColor;

  const photo = document.createElement("div");
  photo.id = "author-photo";

  const headerContent = document.createElement("div");
  headerContent.id = "header-content";

  const authorName = document.createElement("div");
  authorName.id = "author-name";
  authorName.textContent = name;

  const purchaseAmount = document.createElement("div");
  purchaseAmount.id = "purchase-amount";
  purchaseAmount.textContent = `$${amount.toFixed(2)}`;

  headerContent.appendChild(authorName);
  headerContent.appendChild(purchaseAmount);
  header.appendChild(photo);
  header.appendChild(headerContent);

  const content = document.createElement("div");
  content.id = "content";
  content.style.backgroundColor = contentColor;

  const msg = document.createElement("div");
  msg.id = "message";
  msg.setAttribute("dir", "auto");
  msg.textContent = message;

  content.appendChild(msg);
  renderer.appendChild(header);
  renderer.appendChild(content);

  const chatList = document.querySelector("yt-live-chat-item-list-renderer");
  if (chatList) {
    chatList.appendChild(renderer);
    renderer.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  document.getElementById("sc-name").value = "";
  document.getElementById("sc-amount").value = "";
  document.getElementById("sc-message").value = "";
}

function sendLegacySponsor() {
  const name = document.getElementById("ls-name").value.trim();
  if (name === "") {
    alert("กรุณากรอกชื่อสมาชิก");
    return;
  }

  const renderer = document.createElement(
    "yt-live-chat-legacy-paid-message-renderer"
  );

  const authorPhoto = document.createElement("div");
  authorPhoto.id = "author-photo";

  const content = document.createElement("div");
  content.id = "content";

  const eventText = document.createElement("div");
  eventText.id = "event-text";
  eventText.textContent = "NEW SPONSOR!";

  const detailText = document.createElement("div");
  detailText.id = "detail-text";
  detailText.innerHTML = `Welcome <span class="mention">${name}</span>!`;

  content.appendChild(eventText);
  content.appendChild(detailText);

  renderer.appendChild(authorPhoto);
  renderer.appendChild(content);

  const chatList = document.querySelector("yt-live-chat-item-list-renderer");
  if (chatList) {
    chatList.appendChild(renderer);
    renderer.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  document.getElementById("ls-name").value = "";
}
