var aufgabe9;
(function (aufgabe9) {
    var benutzereingabe = document.querySelector("#addTask");
    benutzereingabe.addEventListener("keypress", function (keyboardEvent) {
        if (keyboardEvent.key == "Enter") {
            var newTask = document.createElement("div");
            newTask.className = "task1";
            document.querySelector(".furtherTasks").appendChild(newTask).innerHTML = benutzereingabe.value;
        }
    });
    /* if (keyboardEvent.key == "Enter") {
       let newTask: HTMLDivElement = document.createElement("div");
       newTask.className = "task1";
       document.querySelector(".task1").appendChild(newTask);*/
})(aufgabe9 || (aufgabe9 = {}));
//# sourceMappingURL=script.js.map