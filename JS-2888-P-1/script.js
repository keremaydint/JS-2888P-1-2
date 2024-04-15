async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    displayUsers(users);
  } catch (err) {
    console.log(`Hata Tespit Edildi. Sebebi; ${err}`);
  }
}

fetchUsers();

function displayUsers(users) {
  const container = document.getElementById("container");
  users.forEach((user) => {
    const userCardHTML = `
    <div class="col-md-12 mb-4 d-flex align-items-stretch">
      <div class="card w-100">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title basic-infos">${user.name}</h5>
          <div class="user-details">
            <p class="card-text"><i class="fa-solid fa-user"></i> @${user.username}</p>
            <p class="card-text"><i class="fa-solid fa-location"></i> ${user.address.city}</p>
            <p class="card-text"><i class="fa-solid fa-building"></i> ${user.company.name}</p>
            <p class="card-text"><i class="fa-solid fa-envelope"></i> ${user.email}</p>
            <p class="card-text"><i class="fa-solid fa-phone"></i> ${user.phone}</p>
            <p class="card-text"><i class="fa-solid fa-globe"></i> ${user.website}</p>          
          </div> 
          
        </div>   
      </div>   
    </div>
    `;
    container.innerHTML += userCardHTML;
  });
}
