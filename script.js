// tangkap elemen html
let modal = document.getElementById('modal');
let floating_button = document.getElementById('floating_button');
let modal_bg = document.getElementById('modal_bg');
let addList_form = document.getElementById('addList_form');
let root = document.getElementById('root');
let subtitle = document.getElementById('subtitle');

// tambahkan date ke subtitle
subtitle.innerHTML = new Date().toLocaleString();
subtitle.style.textAlign = 'center';
subtitle.style.fontWeight = 300;

// data list belanja
let data_list_belanja = [];

// menambahkan event listener ke floating button
floating_button.addEventListener('click', () => {
  // munculkan modal
  if (modal.style.display == 'none') {
    showModal();
    return;
  }

  hideModal();
});

modal_bg.addEventListener('click', () => {
  hideModal();
});

// tambahkan listener submit
addList_form.addEventListener('submit', (e) => {
  //
  e.preventDefault();

  // tangkap value dari masing - masing input field

  let barang = e.target.barang.value;
  let harga = e.target.harga.value;

  data_list_belanja.push({
    nama_barang: barang,
    harga_barang: harga,
    tanggal: new Date().toLocaleDateString(),
  });

  e.target.barang.value = '';
  e.target.harga.value = '';

  hideModal();
  renderToHTML();
});

// membuat function showModal
const showModal = () => {
  modal.style.display = 'flex';
  floating_button.style.backgroundColor = 'grey';
  floating_button.style.transform = 'rotate(45deg)';
};

const hideModal = () => {
  modal.style.display = 'none';
  floating_button.style.backgroundColor = '#f280b6';
  floating_button.style.transform = 'rotate(0deg)';
};

// function renderToHtml
const renderToHTML = () => {
  root.innerHTML = '';

  // perulangan
  data_list_belanja.forEach((e, i) => {
    root.innerHTML += `
    <div class="card">
      <small>${e.tanggal}</small>
      <div>
        ${e.nama_barang} <span>Rp. ${e.harga_barang}</span>
      </div>
      <button onclick="handleDelete(${i})">Selesai</button>
    </div>
    `;
  });
};

const handleDelete = (index) => {
  data_list_belanja.splice(index, 1);

  renderToHTML();
};
