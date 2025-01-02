// 3-read_file_async.js
const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.trim().split('\n').slice(1);  // Skip the header
    const students = {};

    lines.forEach(line => {
      const [firstName, , , field] = line.split(',');
      if (field) {
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstName);
      }
    });

    console.log(`Number of students: ${lines.length}`);
    for (const [field, names] of Object.entries(students)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }

  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
