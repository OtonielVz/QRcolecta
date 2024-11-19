const $ = sel => document.querySelector(sel);
const $p = $('.result');
const $generate = $('.generate');

$generate.addEventListener('click', (event) => {
  event.preventDefault();

  const $is = $('.is').value;
  const $pallets = $('.pallets').value;

  if (!$is || !$pallets) {
    $p.textContent = '❌Faltan datos por ingresar'
    return;
  } else {
    $p.textContent = `"id": "${$is}/${$pallets}", "operation": "fbm", "type":"inbound","source":"seller"`;
  }
});
