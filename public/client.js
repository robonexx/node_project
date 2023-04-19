console.log('js file connected');
const uploadBtn = document.querySelector('#uploadBtn');
const inputFile = document.querySelector('#inputFile');
const resultText = document.querySelector('#textResult');

uploadBtn.addEventListener('click', () => {
  const formData = new FormData();
  console.log('clicked btn');
  formData.append('pdfFile', inputFile.files[0]);

  fetch('/extract-text', {
    method: 'post',
    body: formData,
  })
    .then((res) => {
      return res.text();
    })
    .then((extractedText) => {
      resultText.value = extractedText;
    });
});
