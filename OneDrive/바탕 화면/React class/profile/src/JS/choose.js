
function showInputButton() {
    const nameInput = document.getElementById('choose');
    const resultDiv1 = document.getElementById('result5');
    const resultDiv2 = document.getElementById('gauge');

    if (nameInput.value.trim() !== '') {
      resultDiv1.style.display = 'block';
      resultDiv2.style.width='342px';
    } 
  }