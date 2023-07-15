function showFourthTextbox() {
    const nameInput = document.getElementById('number');
    const resultDiv1 = document.getElementById('result3');
    const resultDiv2 = document.getElementById('gauge');

    if (nameInput.value.trim() !== '') {
      resultDiv1.style.display = 'block';
      resultDiv2.style.width='228px';
    } 
}