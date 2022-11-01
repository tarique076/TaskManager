// Write code for the Progress page here 
let prior=JSON.parse(localStorage.getItem("priority-list"))||[];
let done=JSON.parse(localStorage.getItem("done-list"))||[];

let tbody=document.querySelector("tbody");

display(prior)

function display(prior){
    document.querySelector("tbody").innerHTML="";
    prior.forEach(function(el,i){
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
        let td6=document.createElement("td");
        td6.innerText="Add";
        td6.addEventListener("click",function(){
            done.push(el);
            localStorage.setItem("done-list", JSON.stringify(done));
            prior.splice(i,1);
            localStorage.setItem("priority-list", JSON.stringify(prior));
            display(prior);
        })

        tr.append(td1,td2,td3,td4,td5,td6);
        tbody.append(tr);
    })
}
