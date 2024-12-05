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
  }
}