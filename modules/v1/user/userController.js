const tesseract = require('node-tesseract-ocr');

const config = {
  lang: 'eng',
  oem: 1,
  psm: 3,
};
const userCtr = {};
userCtr.ocrImage = (req, res) => {
  tesseract.recognize('/Users/prachi.thakkar/Downloads/test.png', config)
    .then((text) => {
      res.status(200).json({ success: text });
    }).catch((err) => {
      res.status(500).json({ err: err });
    });
};

module.exports = userCtr;
