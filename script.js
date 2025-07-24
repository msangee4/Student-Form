document.getElementById("save").addEventListener("click", function (event) {
    event.preventDefault(); // prevent form from submitting

    // Get input values
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var gender = document.querySelector('input[name="gender"]:checked')?.value || '';
    var course = document.getElementById("course").value;
    var email = document.getElementById("email").value;

    // Create a new row
    var table = document.getElementById("outputTable");
    var newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>${gender}</td>
        <td>${course}</td>
        <td>${email}</td>
        <td><button class="clear">DELETE</button></td>
    `;

    table.appendChild(newRow);

    // Optionally clear the form
    document.querySelector(".studentDetails").reset();
});

// Event delegation to handle Delete button click
document.getElementById("outputTable").addEventListener("click", function (event) {
    if (event.target.classList.contains("clear")) {
        const row = event.target.closest("tr");
        row.remove();
    }
});
