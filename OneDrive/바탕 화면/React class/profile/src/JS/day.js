function showFifthTextbox() {
    const nameInput = document.getElementById('day');
    const resultDiv1 = document.getElementById('result4');
    const resultDiv2 = document.getElementById('gauge');

    if (nameInput.value.trim() !== '') {
      resultDiv1.style.display = 'block';
      resultDiv2.style.width='285px';
    } 
}