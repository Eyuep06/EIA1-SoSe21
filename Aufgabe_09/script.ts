namespace aufgabe9 {


  let benutzereingabe: HTMLInputElement = document.querySelector("#addTask") as HTMLInputElement;
  let taskZahler: number = 1;
  let notDoneyet: HTMLElement = document.querySelector(".fa-circle");
  let taskDone: HTMLElement = document.querySelector(".fa-check-circle");



  benutzereingabe.addEventListener("keypress", function (keyboardEvent: KeyboardEvent): void {



    if (keyboardEvent.key == "Enter") {

      let newTask: HTMLDivElement = document.createElement("div");
      newTask.className = "task1";
      document.querySelector(".furtherTasks").appendChild(newTask).innerHTML = benutzereingabe.value;
      taskZahler = taskZahler + 1;
      document.querySelector("h3").innerHTML = taskZahler + " in total";
    }


  });


  function changeClasses(firsHTMLElement: HTMLElement, secondHTMLElement: HTMLElement): void {
    firsHTMLElement.classList.add("isHidden");
    secondHTMLElement.classList.remove("isHidden");


  }


  notDoneyet.addEventListener("click", function (): void {
    changeClasses(this, taskDone);
  });

  taskDone.addEventListener("click", function (): void {
    changeClasses(this, notDoneyet);

  });

}
