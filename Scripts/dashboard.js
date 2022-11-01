// Write code related to dashboard page
let tbody=document.querySelector("tbody");
 
let tasks= JSON.parse(localStorage.getItem("task-list"))||[];
let prog=JSON.parse(localStorage.getItem("priority-list"))||[];

let fil=document.querySelector("#filter");
fil.addEventListener("change", filterTask);

display(tasks);

function display(tasks){

    let t_tasks=tasks.length;
document.querySelector("h1>span").innerText=t_tasks;

    document.querySelector("tbody").innerHTML="";
    tasks.forEach(function(el,i){
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
            prog.push(el);
            localStorage.setItem("priority-list", JSON.stringify(prog));
            tasks.splice(i,1);
            localStorage.setItem("task-list", JSON.stringify(tasks));
            display(tasks);
            t_tasks--;
        })

        tr.append(td1,td2,td3,td4,td5,td6);
        tbody.append(tr);
    });
}

function filterTask(){
    let selected=document.querySelector("#filter").value;
    if(selected==""){
        display(tasks);
    }else{
        let filtered=tasks.filter(function(el){
            return el.prior==selected;
        });
        display(filtered);
    }
}
