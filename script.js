function openModal(imageSrc, description) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const modalDescription = document.getElementById("modal-description");

  // モーダルの内容を設定
  modalImg.src = imageSrc;
  modalDescription.innerText = description;

  // モーダルを表示
  modal.style.display = "flex";
}

function closeModal(event) {
  const modal = document.getElementById("modal");

  // クリックした要素がモーダル自体か閉じるボタンの場合にのみ非表示にする
  if (event.target.id === "modal" || event.target.className === "close") {
    modal.style.display = "none";
  }
}

// ページロード時にモーダルが勝手に表示されないようにする
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  modal.style.display = "none"; // 初期状態を非表示に設定
});

// ボタンを取得
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// スクロール時にボタンの表示を制御
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.add("show"); // ボタンを表示
  } else {
    scrollToTopBtn.classList.remove("show"); // ボタンを非表示
  }
});

// ボタンをクリックしたときにトップへスクロール
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0, // ページの最上部
    behavior: "smooth", // なめらかにスクロール
  });
});
