document.addEventListener("DOMContentLoaded", () => {

    fetch("https://randomuser.me/api/?results=10")
        .then((res) => res.json())
        .then((data) => setUserData(data.results))

    function setUserData(usersInfo) {
        const tablebody = document.querySelector("tbody");
        tablebody.innerHTML = "";

        usersInfo.forEach((user) => {
            const name = user.name.first + " " + user.name.last;
            const email = user.email;

            const row = `
            <tr>
            <td id="name">${name}</td>
            <td>${email}</td>
            </tr>
            `
            tablebody.innerHTML += row;
        })
        const uname = document.querySelectorAll("#name");
        uname.forEach((cell) => {
            cell.addEventListener("click", () => {
                console.log(cell.textContent);
                openModal(cell.textContent);
            })
        })
    }

    function openModal(userName) {
        const modelContent = document.getElementById("model-content");
        modelContent.innerHTML = userName;
        document.getElementById("model").style.display = "block";
    }
})
function closeModal() {
    document.getElementById("model").style.display = "none";
}