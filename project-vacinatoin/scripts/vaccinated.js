let tbody = document.getElementById("tbody")
let VaccinatedDetails = JSON.parse(localStorage.getItem("vaccinated"))
if(VaccinatedDetails == null) VaccinatedDetails = [];

VaccinatedDetails.forEach((element, index)=>{

   let tr = document.createElement("tr"); 

   let td1 = document.createElement("td");
   td1.innerText=element.id;

   let td2 = document.createElement("td");
   td2.innerText=element.name;

   let td3 = document.createElement("td");
   td3.innerText=element.age;

   let td4 = document.createElement("td");
   td4.innerText=element.Designation;

   let td5 = document.createElement("td");
   td5.innerText=element.Priority;

   let td6 = document.createElement("td");
   td6.innerText=element.Vaccine;



   tr.append(td1, td2, td3, td4, td5, td6, )
   document.querySelector('tbody').append(tr)
})