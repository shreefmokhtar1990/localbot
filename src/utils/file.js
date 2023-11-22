const fs = require('fs');
const path = require('path');

// Function to read a file
async function readFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(path.resolve(filePath), 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

// Function to write to a file
async function writeFile(filePath, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path.resolve(filePath), data, 'utf8', (err) => {
      if (err) {
        console.error('Error writing to file:', err);
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

// Function to create a file
async function createFile(filePath, data = '') {
  return writeFile(filePath, data);
}

// Function to modify a file
async function modifyFile(filePath, modifyFunction) {
  try {
    // Read the file
    const data = await readFile(filePath);

    // Modify the data
    const modifiedData = modifyFunction(data);

    // Write the modified data back to the file
    await writeFile(filePath, modifiedData);
  } catch (error) {
    console.error('Error modifying file:', error);
  }
}

// Export the functions for use in other parts of the application
module.exports = {
  readFile,
  writeFile,
  createFile,
  modifyFile,
};

