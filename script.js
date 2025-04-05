function openPDF() {
  const input = document.getElementById('animalInput').value.trim().toLowerCase();
  const errorMessage = document.getElementById('errorMessage');

  if (!input) {
    errorMessage.textContent = 'Zadaj prosím zviera.';
    return;
  }

  const url = `pdfs/${input}.pdf`;
  fetch(url).then(res => {
    if (res.ok) {
      errorMessage.textContent = '';
      window.open(url, '_blank');
    } else {
      errorMessage.textContent = 'Vyhodnotenie pre toto zviera neexistuje. Skontroluj si názov.';
    }
  });
}
