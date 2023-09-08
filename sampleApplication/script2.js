document.addEventListener("DOMContentLoaded", () => {
    const tableId = document.getElementById("userInfoTable");
    fetch("https://randomuser.me/api/?results=10")
        .then((response) => {
            if (!response.ok) {
                throw new Error("failed");
            }
            return response.json();
        })
        .then((data) => {
            displayUsers(data.results);
        })

    function displayUsers(userInfo) {
        const tableBody = document.querySelector("tbody");
        tableBody.innerHTML = "";

        userInfo.forEach((user) => {
            const uname = user.name.first + " " + user.name.last;
            const email = user.email;
            const userLocation = user.location.state + "," + user.location.country;
            const userImage = user.picture.medium;

            const row = `
            <tr>
            <td id="uname">
               ${uname} 
            </td>
            <td>
               ${email} 
            </td>
            <td>
               ${userLocation} 
            </td>
            <td>
               <img src=${userImage}> 
            </td>
            </tr>
            `
            tableBody.innerHTML += row;
        })
        console.log(userInfo);

        // Add onclick event to the username cells
        const usernameCells = document.querySelectorAll("#uname");
        usernameCells.forEach(cell => {
            cell.addEventListener("click", () => handleClick(cell.textContent));
        });
    }

})
function handleClick(data) {
    console.log(data);
}