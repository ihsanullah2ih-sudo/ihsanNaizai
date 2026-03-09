let patients=0
let doctors=0
let appointments=0
let revenue=0

function showSection(id){

document.querySelectorAll(".section").forEach(s=>{
s.classList.remove("active")
})

document.getElementById(id).classList.add("active")

}

function addPatient(){

let name=pName.value
let age=pAge.value
let disease=pDisease.value

let row=`
<tr>
<td>${name}</td>
<td>${age}</td>
<td>${disease}</td>
<td><button onclick="this.parentElement.parentElement.remove()">Delete</button></td>
</tr>
`

patientTable.innerHTML+=row

patients++
pCount.innerText=patients

}

function addDoctor(){

let name=dName.value
let pos=dPosition.value

let row=`
<tr>
<td>${name}</td>
<td>${pos}</td>
<td><button onclick="this.parentElement.parentElement.remove()">Delete</button></td>
</tr>
`

doctorTable.innerHTML+=row

doctors++
dCount.innerText=doctors

}

function addAppointment(){

let p=aPatient.value
let d=aDoctor.value
let date=aDate.value

let li=document.createElement("li")

li.innerText=p+" with "+d+" on "+date

appointmentList.appendChild(li)

appointments++
aCount.innerText=appointments

}

function addBill(){

let p=bPatient.value
let amount=parseInt(bAmount.value)

let li=document.createElement("li")

li.innerText=p+" - "+amount+"$"

billList.appendChild(li)

revenue+=amount

rTotal.innerText=revenue

}