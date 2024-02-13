let table = document.querySelector("table");
let tbody = document.getElementById("tbody");
let filter = document.getElementById("filter");

let userDetails = JSON.parse(localStorage.getItem("userData")) || [];

filter.addEventListener("change", (e) => {
  tbody.innerText = null;
  e.preventDefault();

  console.log(filter.value);
  let FilterByVaccine = userDetails.filter((element) => {
    if (element.Vaccine == filter.value) {
      return true;
    }
  });
  console.log(FilterByVaccine);

  // if(FilterByVaccine && FilterByVaccine.length){
  FilterByVaccine.sort((a, b) => {
    if (a.priority > b.priority) return 1;
    if (a.priority < b.priority) return -1;
    return 0;
  });

  FilterByVaccine.sort((a, b) => a.age - b.age);
  // }

  console.log(FilterByVaccine);
  // userDetails=FilterByVaccine
  DisplayData(FilterByVaccine);
});

DisplayData(userDetails);

function DisplayData(Data) {
  tbody.innerHTML = null;

  Data.forEach((element, index) => {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = element.id;

    let td2 = document.createElement("td");
    td2.innerText = element.name;

    let td3 = document.createElement("td");
    td3.innerText = element.age;

    let td4 = document.createElement("td");
    td4.innerText = element.Designation;

    let td5 = document.createElement("td");
    td5.innerText = element.Priority;

    let td6 = document.createElement("td");
    td6.innerText = element.Vaccine;

    let del = document.createElement("td");
    del.innerText = "Delete";
    del.style.backgroundColor = "red";
    del.style.color = "White";
    del.style.cursor = "pointer";
    del.addEventListener("click", () => {
      let deleted = userDetails.filter(function (el, i) {
        if (i === index) {
          return false;
        } else {
          return true;
        }
      });
      alert(`Confirm "Ok" to Delete The User Data`);
      userDetails = deleted;
      DisplayData(userDetails);
      localStorage.setItem("userData", JSON.stringify(userDetails));
    });

    let add = document.createElement("td");
    add.innerText = "Vaccinate";
    add.style.color = "White";
    add.style.backgroundColor = "green";
    add.style.cursor = "pointer";
    add.addEventListener("click", () => {
      let VaccinatedData = JSON.parse(localStorage.getItem("vaccinated")) || [];
      VaccinatedData.push(element);
      localStorage.setItem("vaccinated", JSON.stringify(VaccinatedData));

      let vaccinated = userDetails.filter(function (el, i) {
        if (i === index) {
          return false;
        } else {
          return true;
        }
      });

      userDetails = vaccinated;
      DisplayData(userDetails);
      localStorage.setItem("userData", JSON.stringify(userDetails));
    });

    tr.append(td1, td2, td3, td4, td5, td6, del, add);
    tbody.append(tr);
  });
}
