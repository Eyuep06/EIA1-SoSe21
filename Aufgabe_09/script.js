var aufgabe9;
(function (aufgabe9) {
    var benutzereingabe = document.querySelector("#addTask");
    var taskZahler = 1;
    var notDoneyet = document.querySelector(".fa-circle");
    var taskDone = document.querySelector(".fa-check-circle");
    benutzereingabe.addEventListener("keypress", function (keyboardEvent) {
        if (keyboardEvent.key == "Enter") {
            var newTask = document.createElement("div");
            newTask.className = "task1";
            document.querySelector(".furtherTasks").appendChild(newTask).innerHTML = benutzereingabe.value;
            taskZahler = taskZahler + 1;
            document.querySelector("h3").innerHTML = taskZahler + " in total";
        }
    });
    function changeClasses(firsHTMLElement, secondHTMLElement) {
        firsHTMLElement.classList.add("isHidden");
        secondHTMLElement.classList.remove("isHidden");
    }
    notDoneyet.addEventListener("click", function () {
        changeClasses(this, taskDone);
    });
    taskDone.addEventListener("click", function () {
        changeClasses(this, notDoneyet);
    });
})(aufgabe9 || (aufgabe9 = {}));
//# sourceMappingURL=script.js.map