// Write code related to Home page here 
document.querySelector("form").addEventListener("submit", taskInput);
let taskArr=JSON.parse(localStorage.getItem("task-list"))||[];

function taskInput(event){
    event.preventDefault();
    let taskObj={
        t_name:document.querySelector("#name").value,
        des:document.querySelector("#desc").value,
        start_d:document.querySelector("#start").value,
        end_d:document.querySelector("#end").value,
        prior:document.querySelector("#priority").value,
    }
    taskArr.push(taskObj);
    localStorage.setItem("task-list", JSON.stringify(taskArr));
}