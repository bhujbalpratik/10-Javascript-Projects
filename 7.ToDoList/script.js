const AddTaskD = () => {

    var tsk = document.getElementById('Taskdes').value;

    if (tsk == "") {
        alert("You Must Write Something..!");
    } else {
        document.getElementById('ListContainer').innerHTML += " <li class=\"List\"> <input type=\"checkbox\" onclick=\"TaskComplete();\" class=\"check\"/>" + tsk + "<span onclick=\"remove(this)\" class=\"rmv\">&times;</span></li>";
    }
    document.getElementById('Taskdes').value = "";
    // saveData();
}

const AddTaskM = () => {

    var tsk = document.getElementById('Taskdesc').value;

    if (tsk == "") {
        alert("You Must Write Something..!");
    } else {
        document.getElementById('ListContainerMobile').innerHTML += " <li class=\"List\"> <input type=\"checkbox\" onclick=\"TaskComplete();\" class=\"check\"/>" + tsk + "<span onclick=\"remove(this)\" class=\"rmv\">&times;</span></li>";
    }
    document.getElementById('Taskdesc').value = "";
    // saveData();

}

const TaskComplete = () => {
    var list = document.getElementsByClassName('List');

    var check = document.getElementsByClassName('check');

    for (let i = 0; i < check.length; i++) {
        if (check[i].checked == true) {
            list[i].style.textDecoration = "line-through";
            // saveData();
        }
        else {
            list[i].style.textDecoration = "none";
            // saveData();
        }
    }

}

const remove = (x) => {
    x.style.backgroundColor = "white";

    var list = document.getElementsByClassName('List');

    var rmv = document.getElementsByClassName('rmv');

    for (let i = 0; i < rmv.length; i++) {
        if (rmv[i].style.backgroundColor == "white") {
            list[i].style.display = "none";
            // saveData();
        }
    }

}

// const saveData = () => {
//     var check = document.getElementsByClassName('check');
//     for (let i = 0; i < check.length; i++) {
//         localStorage.setItem("data", check[i].value);
//     }
//     localStorage.setItem("data", ListContainerMobile.innerHTML, ListContainer.innerHTML,);
// }

// const showTask = () => {
//     ListContainerMobile.innerHTML = localStorage.getItem("data");
//     ListContainer.innerHTML = localStorage.getItem("data");

//     var check = document.getElementsByClassName('check');

//     for (let i = 0; i < check.length; i++) {
//         check[i].value = localStorage.getItem("data");
//     }
// }

// showTask();