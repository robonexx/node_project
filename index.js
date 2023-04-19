const fs = require('fs');
const express = require('express');
const fileUpload = require('express-fileupload');
const pdfParse = require('pdf-parse');

// for text file

const app = express();

app.use('/', express.static('public'));
app.use(fileUpload());

app.post('/extract-text', (req, res) => {
  if (!req.files && !req.files.pdfFile) {
    res.status(400 + console.log('upload failed no file'));
    res.end();
  }

  pdfParse(req.files.pdfFile).then((result) => {
    res.send(result.text);

    const newText = result.text;

    fs.writeFileSync('./newFile/latestInput.txt', newText, (err) => {
      if (err) {
        console.error(err);
      }
      // file written successfully
    });
  });
});

app.listen(5000);
