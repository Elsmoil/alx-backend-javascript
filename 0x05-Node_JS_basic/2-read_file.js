const fs = require('fs');

function countStudents(path) {
  try {
    // Attempt to read the file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split the file contents into an array of lines
    const lines = data.trim().split('\n');

    // Ensure there's at least one line in the file (header row)
    if (lines.length < 2) {
      throw new Error('Cannot load the database');
    }

    // Parse the student data (skip the header row)
    const students = lines.slice(1).map(line => line.split(','));

    // Object to store the students per field
    const fields = {};

    // Loop through each student and categorize by field
    students.forEach(student => {
      const field = student[3]; // Field is the fourth column
      const name = student[0]; // Name is the first column
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(name);
    });

    // Log the total number of students
    const totalStudents = students.length;
    console.log(`Number of students: ${totalStudents}`);

    // Log the number of students in each field
    Object.entries(fields).forEach(([field, names]) => {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    });

  } catch (err) {
    // Handle errors (file not found or other issues)
    console.error(err.message);
  }
}

module.exports = countStudents;
