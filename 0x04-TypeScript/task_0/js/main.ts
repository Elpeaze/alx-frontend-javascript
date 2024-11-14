interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Alice",
    lastName: "Johnson",
    age: 20,
    location: "New York"
};

const student2: Student = {
    firstName: "Bob",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
};

const studentsList: Student[] = [student1, student2];

// Function to render the students table
function renderTable(students: Student[]): void {
    const table = document.createElement("table");

    // Create table headers
    const headerRow = table.insertRow();
    const headerCell1 = headerRow.insertCell();
    headerCell1.textContent = "First Name";
    const headerCell2 = headerRow.insertCell();
    headerCell2.textContent = "Location";

    // Add student rows
    students.forEach((student) => {
        const row = table.insertRow();
        const firstNameCell = row.insertCell();
        firstNameCell.textContent = student.firstName;
        const locationCell = row.insertCell();
        locationCell.textContent = student.location;
    });

    // Append the table to the document body
    document.body.appendChild(table);
}

// Call the function to render the table
renderTable(studentsList);
