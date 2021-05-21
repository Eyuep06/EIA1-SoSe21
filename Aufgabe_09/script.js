var aufgabe9;
(function (aufgabe9) {
    var benutzereingabe = document.querySelector("#addTask");
    var taskZahler = 0;
    benutzereingabe.addEventListener("keypress", function (keyboardEvent) {
        if (keyboardEvent.key == "Enter") {
            var newTask_1 = document.createElement("div");
            newTask_1.className = "task1";
            var circle_1 = document.createElement("i");
            circle_1.classList.add("far", "fa-circle");
            var circleCheck_1 = document.createElement("i");
            circleCheck_1.classList.add("far", "fa-check-circle", "isHidden");
            var trash = document.createElement("i");
            trash.classList.add("far", "fa-trash-alt");
            taskZahler = taskZahler + 1;
            document.querySelector("h3").innerHTML = taskZahler + " in total";
            document.querySelector(".furtherTasks").appendChild(newTask_1).innerHTML = benutzereingabe.value;
            newTask_1.appendChild(circle_1);
            newTask_1.appendChild(circleCheck_1);
            newTask_1.appendChild(trash);
            function changeClasses(firsHTMLElement, secondHTMLElement) {
                firsHTMLElement.classList.add("isHidden");
                secondHTMLElement.classList.remove("isHidden");
            }
            circleCheck_1.addEventListener("click", function () {
                changeClasses(circleCheck_1, circle_1);
            });
            circle_1.addEventListener("click", function () {
                changeClasses(circle_1, circleCheck_1);
            });
            trash.addEventListener("click", function () {
                newTask_1.classList.add("isHidden");
            });
        }
    });
})(aufgabe9 || (aufgabe9 = {}));
//# sourceMappingURL=script.js.map