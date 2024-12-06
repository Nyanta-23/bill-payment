function popUp(text, imageUrl) {
  const body = document.body;

  // Buat overlay
  const overlay = document.createElement('div');
  overlay.className = "overlay";

  // Buat pop-up
  const popUp = document.createElement('div');
  popUp.className = "popup";

  // Isi konten pop-up
  popUp.innerHTML = `
    <h6 class='popup-text'>${text}</h6>
    <div class='popup-wrap-img'>
      <img src="${imageUrl}" alt="Image" class='popup-img'>
    </div>
    <button class='popup-button'>OK</button>
  `;

  // Tambahkan pop-up ke dalam overlay
  overlay.appendChild(popUp);
  body.appendChild(overlay);

  // Tombol untuk menutup pop-up
  const closeButton = popUp.querySelector('button');
  closeButton.addEventListener('click', () => {
    body.removeChild(overlay); // Hapus overlay saat tombol OK diklik
  });
}

function flash(title, text, imageUrl) {
  const body = document.body;


  // Buat overlay
  const overlay = document.createElement('div');
  overlay.className = "overlay";

  // Buat pop-up
  const popUp = document.createElement('div');
  popUp.className = "popup";

  // Isi konten pop-up
  popUp.innerHTML = `
  <div class='popup-wrap-img'>
    <img src="${imageUrl}" alt="Image" class='popup-img'>
  </div>
    <h6 class='popup-text'>${title}</h6>
    <p>${text}</p>
  `;

  // Tambahkan pop-up ke dalam overlay
  overlay.appendChild(popUp);
  body.appendChild(overlay);

  setTimeout(() => {
    body.removeChild(overlay); // Hapus overlay
  }, 1000);

}

function waitingPayment(imageUrl, text) {
  const body = document.body;

  // Buat overlay
  const overlay = document.createElement('div');
  overlay.className = "overlay";

  // Buat pop-up
  const popUp = document.createElement('div');
  popUp.className = "popup";

  // Isi konten pop-up
  popUp.innerHTML = `
  <div class='popup-wrap-img'>
  <img src="${imageUrl}" alt="Image" class='popup-img'>
  </div>
  <h6 class='popup-text'>Menunggu pembayaran</h6>
    <div class='popup-wrap-text'>
      ${text}
    </div>
    <div class="modal-buttons">
      <button class='secondary-btn' onClick="goToHome()">Beranda</button>
      <button class='primary-btn' onClick="goToNotifications()">Nontifikasi</button>
    </div>
  `;

  // Tambahkan pop-up ke dalam overlay
  overlay.appendChild(popUp);
  body.appendChild(overlay);

  // // Tombol untuk menutup pop-up
  // const redirectHome = popUp.querySelector('secondary-btn');
  // console.log(redirectHome);
  // redirectHome.addEventListener('click', () => {
  //   body.removeChild(overlay); // Hapus overlay saat tombol OK diklik
  //   window.location.href = 'index.html';
  // });

  // const redirectNotif = popUp.querySelector('primary-btn');
  // redirectNotif.addEventListener('click', () => {
  //   body.removeChild(overlay); // Hapus overlay saat tombol OK diklik
  //   window.location.href = 'notifikasi.html';
  // });
}

function methodSelectedText(method) {
  switch (method) {
    case 'bca':
      return 'Bank BCA';
    case 'bjb':
      return 'Bank BJB';
    case 'bni':
      return 'Bank BNI';
    case 'mandiri':
      return 'Bank Mandiri';
    case 'bri':
      return 'Bank BRI';
    case 'ovo':
      return 'OVO';
    case 'dana':
      return 'Dana';
    case 'gopay':
      return 'GoPay';
    case 'shopeepay':
      return 'ShopeePay';
  }
}

function methodSelected(method) {

  switch (method) {
    case 'bca':
      return 'bca.jpg';
    case 'bjb':
      return 'bjb.png';
    case 'bni':
      return 'bni.png';
    case 'mandiri':
      return 'mandiri.jpg';
    case 'bri':
      return 'bri.jpg';
    case 'ovo':
      return 'ovo.png';
    case 'dana':
      return 'dana.png';
    case 'gopay':
      return 'gopay.png';
    case 'shopeepay':
      return 'sp.png';
  }
}

function codeMethod(method) {

  switch (method) {
    case 'bca':
      return '121';
    case 'bjb':
      return '122';
    case 'bni':
      return '123';
    case 'mandiri':
      return '124';
    case 'bri':
      return '125';
    case 'ovo':
      return '131';
    case 'dana':
      return '132';
    case 'gopay':
      return '133';
    case 'shopeepay':
      return '134';
  }
}