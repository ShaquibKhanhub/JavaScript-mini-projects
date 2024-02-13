let Register = document.getElementById("Register");
Register.addEventListener("click", (e) => {
  e.preventDefault();
  //    console.log("done")
  let name = document.getElementById("name").value;
  let ID = document.getElementById("ID").value;
  let age = document.getElementById("age").value;
  let Designation = document.getElementById("Designation").value;
  let Priority = document.getElementById("Priority").value;
  let Vaccine = document.getElementById("Vaccine").value;

  let objData = {
    id: ID,
    name: name,
    age: age,
    Designation: Designation,
    Priority: Priority,
    Vaccine: Vaccine,
  };
  // console.log(objData)
  let resData = JSON.parse(localStorage.getItem("userData")) || [];

  resData.push(objData);

  localStorage.setItem("userData", JSON.stringify(resData));
  alert("User Added to the next Page");
});