document.addEventListener("DOMContentLoaded", () => {
    const userTable = document.getElementById("userTable");

    fetch("https://randomuser.me/api/?results=10")
        .then(response => response.json())
        .then(data => {
            const users = data.results;
            displayUsers(users);
        })
        .catch(error => console.error("Error fetching data:", error));

    function displayUsers(users) {
        const tbody = userTable.querySelector("tbody");
        tbody.innerHTML = "";

        users.forEach(user => {
            const name = `${user.name.first} ${user.name.last}`;
            const email = user.email;
            const location = `${user.location.city}, ${user.location.country}`;
            const phone = user.phone;
            const picture = user.picture.medium;

            const row = `
          <tr>
            <td id="name">${name}</td>
            <td>${email}</td>
            <td>${location}</td>
            <td>${phone}</td>
            <td><img src=${picture} ></td>
          </tr>
        `;

            tbody.innerHTML += row;
        });
        // Add onclick event to the username cells
        const usernameCells = document.querySelectorAll("#name");
        usernameCells.forEach(cell => {
            cell.addEventListener("click", () => openModal(cell.textContent));
        });
    }
    function handleUsernameClick(event) {
        // Get the text content of the clicked username cell
        const username = event.target.textContent;

        // Perform any action you want with the username (e.g., show a message)
        alert(`You clicked on username: ${username}`);
    }
    function openModal(username) {
        const modal = document.getElementById("modal");
        const modalContent = document.getElementById("modalContent");

        // Set the modal content
        modalContent.innerHTML = `<h2>User Profile: ${username}</h2>`;

        var myModal = new bootstrap.Modal(document.getElementById('modal'));
        myModal.show();
    }
    function closeDialog() {
        var myModal = new bootstrap.Modal(document.getElementById('modal'));
        myModal.show();
    }

    document.getElementById("closeButton").addEventListener("click", closeDialog);
});
