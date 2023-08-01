const fs = require('fs');

// 데이터를 로컬 파일에 저장하는 함수
function saveDataToFile(filename, data) {
  fs.writeFile(filename, JSON.stringify(data), (err) => {
    if (err) {
      console.error('Error saving data:', err);
    } else {
      console.log('Data saved successfully.');
    }
  });
}

// 데이터를 로컬 파일에서 읽어오는 함수
function readDataFromFile(filename) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading data:', err);
    } else {
      const parsedData = JSON.parse(data);
      console.log('Read data:', parsedData);
    }
  });
}

// 예시 데이터
const testData = { key: 'value' };

// 데이터를 파일에 저장
saveDataToFile('data.json', testData);

// 데이터를 파일에서 읽어오기
readDataFromFile('data.json');
