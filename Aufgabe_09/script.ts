namespace aufgabe9 {


  let benutzereingabe: HTMLInputElement = document.querySelector("#addTask") as HTMLInputElement;
  let taskZahler: number = 0;



  benutzereingabe.addEventListener("keypress", function (keyboardEvent: KeyboardEvent): void {



    if (keyboardEvent.key == "Enter") {

      let newTask: HTMLDivElement = document.createElement("div");
      newTask.className = "task1";
      const circle: HTMLElement = document.createElement("i");
      circle.classList.add("far", "fa-circle");
      const circleCheck: HTMLElement = document.createElement("i");
      circleCheck.classList.add("far", "fa-check-circle", "isHidden");
      const trash: HTMLElement = document.createElement("i");
      trash.classList.add("far", "fa-trash-alt");
      let eingabeTask: Text = new Text(benutzereingabe.value);
      taskZahler = taskZahler + 1;
      document.querySelector("h3").innerHTML = taskZahler + " in total";

      document.querySelector(".furtherTasks").appendChild(newTask);

      newTask.appendChild(circle);
      newTask.appendChild(circleCheck);
      newTask.appendChild(eingabeTask);
      newTask.appendChild(trash);

      function changeClasses(firsHTMLElement: HTMLElement, secondHTMLElement: HTMLElement): void {
        firsHTMLElement.classList.add("isHidden");
        secondHTMLElement.classList.remove("isHidden");


      }


      circleCheck.addEventListener("click", function (): void {
        changeClasses(circleCheck, circle);
      });

      circle.addEventListener("click", function (): void {
        changeClasses(circle, circleCheck);

      });





      trash.addEventListener("click", function (): void {
        newTask.classList.add("isHidden");
        taskZahler--;
        document.querySelector("h3").innerHTML = taskZahler + " in total";


      });





    }


  });






}