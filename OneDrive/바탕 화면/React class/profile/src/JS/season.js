function showSecondChooseButton() {
    const nameInput = document.getElementById('seoson');
    const resultDiv = document.getElementById('result1-1');

    resultDiv.style.display = 'block';
  }
function choosespring() {
    const nameInput = document.getElementById('spring');
    const resultDiv1 = document.getElementById('result1-1');
    resultDiv1.style.display = 'none';
  }
function choosesummer() {
    const nameInput = document.getElementById('summer');
    const resultDiv = document.getElementById('result1-1');

    resultDiv.style.display = 'block';
  }
function chooseautumn() {
    const nameInput = document.getElementById('autumn');
    const resultDiv = document.getElementById('result1-1');

    resultDiv.style.display = 'block';
}
function choosewinter() {
    const nameInput = document.getElementById('winter');
    const resultDiv = document.getElementById('result1-1');

    resultDiv.style.display = 'block';
}

function showThirdTextbox() {
    const nameInput = document.getElementById('season');
    const resultDiv1 = document.getElementById('result2');
    const resultDiv2 = document.getElementById('gauge');

    if (nameInput.value.trim() !== '') {
      resultDiv1.style.display = 'block';
      resultDiv2.style.width='171px';
    } 
  }