namespace aufgabe11 {



    interface MyObject {
        todosChecked: boolean;
        todosText: string;
    }


    let todoArray: MyObject[] = [];


    var inputDOMElement: HTMLInputElement;
    var addButtonDOMElement: HTMLElement;
    var todosDOMElement: HTMLElement;
    var counterDOMElement: HTMLElement;
    var doneDOMElement: HTMLElement;
    var openDOMELement: HTMLElement;


    window.addEventListener("load", function (): void {

        inputDOMElement = document.querySelector("#inputTodo");
        addButtonDOMElement = document.querySelector("#addButton");
        todosDOMElement = document.querySelector("#todos");
        counterDOMElement = document.querySelector("#counter");
        doneDOMElement = document.querySelector("#done");
        openDOMELement = document.querySelector("#open");



        addButtonDOMElement.addEventListener("click", addTodo);


        drawListToDOM();
    });

    function drawListToDOM(): void {
        todosDOMElement.innerHTML = "";

        for (let index: number = 0; index < todoArray.length; index++) {


            let todo: HTMLElement = document.createElement("div");
            todo.classList.add("todo");


            todo.innerHTML = "<span class='check " + todoArray[index].todosChecked + "'><i class='fas fa-check'></i></span>"
                + todoArray[index].todosText +
                "<span class='trash fas fa-trash-alt'></span>";

            todo.querySelector(".check").addEventListener("click", function (): void {

                toggleCheckState(index);
            });
            todo.querySelector(".trash").addEventListener("click", function (): void {

                deleteTodo(index);
            });

            todosDOMElement.appendChild(todo);
        }
        doneCounter();
        updateCounter();
        openCounter();
    }

    function updateCounter(): void {
        counterDOMElement.innerHTML = todoArray.length + " in total";
    }


    function openCounter(): void {
        let openIndex: number = 0;
        for (var index: number = 0; index < todoArray.length; index++) {
            if (todoArray[index].todosChecked == false)
                openIndex++;
        }


        openDOMELement.innerHTML = openIndex + " open";
    }

    function doneCounter(): void {
        let doneIndex: number = 0;
        for (var index: number = 0; index < todoArray.length; index++)
            if (todoArray[index].todosChecked == true)
                doneIndex++;
        doneDOMElement.innerHTML = doneIndex + " done";
    }








    function addTodo(): void {

        if (inputDOMElement.value != "") {

            todoArray.unshift({
                todosText: inputDOMElement.value,
                todosChecked: false
            });


            inputDOMElement.value = "";


            drawListToDOM();
        }
    }


    function toggleCheckState(index: number): void {


        todoArray[index].todosChecked = !todoArray[index].todosChecked;

        drawListToDOM();
    }


    function deleteTodo(index: number): void {

        todoArray.splice(index, 1);



        drawListToDOM();
    }

    var recordButton: HTMLElement = document.querySelector("#recordButton");
    console.log(recordButton);


    declare var Artyom: any;

    recordButton.addEventListener("click", function (): void {
        const artyom: any = new Artyom();

        artyom.addCommands({
            indexes: ["erstelle Aufgabe *"],
            smart: true,
            action: function (i: any, wildcard: string): void {
                todoArray.unshift({
                    todosText: wildcard,
                    todosChecked: false
                });
                inputDOMElement.value = "";
                drawListToDOM();
                console.log("Neue Aufgabe wird erstellt: " + wildcard);


            }
        });

        function startContinuousArtyom(): void {
            artyom.fatality();

            setTimeout(
                function (): void {
                    artyom.initialize({
                        lang: "de-DE",
                        continuous: true,
                        listen: true,
                        interimResults: true,
                        debug: true
                    }).then(function (): void {
                        console.log("Ready!");
                    });
                },
                250);
        }

        startContinuousArtyom();

    });

}