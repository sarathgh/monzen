//   employee are populated using below script //

const team = document.getElementById("team-container");
fetch("employee.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((employee) => {
      const employeeCard = document.createElement("div");
      employeeCard.className = "teamcard";
      employeeCard.innerHTML = `
        <img class="profile" src="${employee["Upload Your passport size photo"]}" alt="" onerror="this.src='resources/user.svg'">
        <div class="teamdetail">
        <h2>${employee["Full Name"]}</h2>
        <text>${employee["post"]}</text>
        <p>${employee["Tagline\n(To showcase next to your profile )"]}</p>
        <div class="social-icons">
            <a href=${employee["Instagram Profile"]} class="icon-link instagram"></a>
            <a href=${employee["Twitter Profile"]} class="icon-link twitter"></a>
            <a href${employee["Linkedin Profile"]} class="icon-link linkedin"></a>
            <a href${employee["Facebook Profile"]} class="icon-link facebook"></a>
        </div>
    </div>
      `;
      team.appendChild(employeeCard);
    });
  })
  .catch((error) => console.log("Error fetching JSON data:", error));



//   interns are populated using below script //

const internContainer = document.getElementById("intern-container");
fetch("interns.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((intern) => {
      const internCard = document.createElement("div");
      internCard.className = "intern";
      internCard.innerHTML = `
        <img class="internprofile" src="${intern["photo"]}" alt=""  onerror="this.src='resources/user.svg'">
        <div class="teamdetail">
          <h2>${intern["Name"]}</h2>
          <p>${intern["Tagline"]}</p>
          <text>${intern["post"]}</text>
          <div class="internsocial-icons">
         
            <a href="${intern["Linkedin Profile"]}" class="icon-link linkedin"></a>
            <a href="${intern["Github Profile"]}" class="icon-link github"></a>
          </div>
        </div>
      `;
      internContainer.appendChild(internCard);
    });
  })
  .catch((error) => console.log("Error fetching JSON data:", error));

  
