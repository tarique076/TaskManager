// Write code related to Done page here
let doneLS=JSON.parse(localStorage.getItem("done-list"))||[];

let tbody=document.querySelector("tbody");

doneLS.forEach(function(el){
    let tr=document.createElement("tr");
    let td1=document.createElement("td");
    td1.innerText=el.t_name;
    let td2=document.createElement("td");
    td2.innerText=el.des;
    let td3=document.createElement("td");
    td3.innerText=el.start_d;
    let td4=document.createElement("td");
    td4.innerText=el.end_d;
    let td5=document.createElement("td");
    td5.innerText=el.prior;

    tr.append(td1,td2,td3,td4,td5);
    tbody.append(tr);
})