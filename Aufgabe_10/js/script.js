var aufgabe10;
(function (aufgabe10) {
    var todoArray = [];
    var inputDOMElement;
    var addButtonDOMElement;
    var todosDOMElement;
    var counterDOMElement;
    window.addEventListener("load", function () {
        inputDOMElement = document.querySelector("#inputTodo");
        addButtonDOMElement = document.querySelector("#addButton");
        todosDOMElement = document.querySelector("#todos");
        counterDOMElement = document.querySelector("#counter");
        addButtonDOMElement.addEventListener("click", addTodo);
        drawListToDOM();
    });
    function drawListToDOM() {
        todosDOMElement.innerHTML = "";
        var _loop_1 = function (index) {
            var todo = document.createElement("div");
            todo.classList.add("todo");
            todo.innerHTML = "<span class='check " + todoArray[index].todosChecked + "'><i class='fas fa-check'></i></span>"
                + todoArray[index].todosText +
                "<span class='trash fas fa-trash-alt'></span>";
            todo.querySelector(".check").addEventListener("click", function () {
                toggleCheckState(index);
            });
            todo.querySelector(".trash").addEventListener("click", function () {
                deleteTodo(index);
            });
            todosDOMElement.appendChild(todo);
        };
        for (var index = 0; index < todoArray.length; index++) {
            _loop_1(index);
        }
        updateCounter();
    }
    function updateCounter() {
        counterDOMElement.innerHTML = todoArray.length + " in total";
    }
    function addTodo() {
        if (inputDOMElement.value != "") {
            todoArray.unshift({ todosText: inputDOMElement.value,
                todosChecked: false });
            inputDOMElement.value = "";
            drawListToDOM();
        }
    }
    function toggleCheckState(index) {
        todoArray[index].todosChecked = !todoArray[index].todosChecked;
        drawListToDOM();
    }
    function deleteTodo(index) {
        todoArray.splice(index, 1);
        drawListToDOM();
    }
})(aufgabe10 || (aufgabe10 = {}));
//# sourceMappingURL=script.js.map