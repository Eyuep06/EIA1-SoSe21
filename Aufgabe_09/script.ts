namespace aufgabe9 {


  let benutzereingabe: HTMLInputElement = document.querySelector("#addTask") as HTMLInputElement;
  



  benutzereingabe.addEventListener("keypress", function (keyboardEvent: KeyboardEvent): void {



    if (keyboardEvent.key == "Enter") {

      let newTask: HTMLDivElement = document.createElement("div");
      newTask.className = "task1";
      document.querySelector(".furtherTasks").appendChild(newTask).innerHTML = benutzereingabe.value;

    }


  });


  /* if (keyboardEvent.key == "Enter") {
     let newTask: HTMLDivElement = document.createElement("div");
     newTask.className = "task1";
     document.querySelector(".task1").appendChild(newTask);*/


}