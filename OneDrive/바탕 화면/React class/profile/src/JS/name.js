function showSecondTextbox() {
    const nameInput = document.getElementById('name');
    const resultDiv1 = document.getElementById('result1');
    const resultDiv2 = document.getElementById('gauge');

    if (nameInput.value.trim() !== '') {
      resultDiv1.style.display = 'block';
      resultDiv2.style.width='114px';
    }
}
