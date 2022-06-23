window.addEventListener("load", () => {
  const form = document.querySelector("#task-form");
  const input = document.querySelector("#task-input");
  const list_element = document.querySelector("#tasks");
  const comp_list_element = document.querySelector("#comp-tasks");
  //   console.log(form);
  form.addEventListener("submit", (e) => {
    e.preventDefault(); //stops the refreshing of page
    // console.log("submit form");
    const task = input.value;
    if (!task) {
      alert("Please Enter some task");
      return;
      // } else {
      //   console.log("success");
    }
    const task_el = document.createElement("div");
    task_el.classList.add("task");
    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");
    // task_content_el.innerText = task;
    task_el.appendChild(task_content_el);

    const task_input_el = document.createElement("input");
    task_input_el.classList.add("text");
    task_input_el.type = "text";
    task_input_el.value = task;
    task_input_el.setAttribute("readonly", "readonly");
    task_content_el.appendChild(task_input_el);
    const task_action_el = document.createElement("div");
    task_action_el.classList.add("actions");
    const task_edit_el = document.createElement("button");
    task_edit_el.classList.add("edit");
    task_edit_el.innerHTML = "EDIT";
    const task_complete_el = document.createElement("button");
    task_complete_el.classList.add("completed");
    task_complete_el.innerHTML = "COMPLETE";
    const task_delete_el = document.createElement("button");
    task_delete_el.classList.add("delete");
    task_delete_el.innerHTML = "DELETE";

    task_action_el.appendChild(task_edit_el);
    task_action_el.appendChild(task_complete_el);
    task_action_el.appendChild(task_delete_el);

    task_el.appendChild(task_action_el);

    list_element.appendChild(task_el);
    input.value = "";
    console.log("List updated!!!");

    //FOR EDITING THE ELEMENT

    task_edit_el.addEventListener("click", () => {
      if (task_edit_el.innerText.toLowerCase() == "edit") {
        task_input_el.removeAttribute("readonly");
        task_input_el.focus();
        task_edit_el.innerText = "SAVE";
      } else {
        task_input_el.setAttribute("readonly", "readonly");
        task_edit_el.innerText = "EDIT";
        console.log("Element edited");
      }
    });
    task_delete_el.addEventListener("click", () => {
      list_element.removeChild(task_el);
      console.log("element deleted==>" + " " + task);
    });
    task_complete_el.addEventListener("click", () => {
      list_element.removeChild(task_el);
      const comp_task_el = document.createElement("div");
      comp_task_el.classList.add("comp-task");
      const comp_task_content_el = document.createElement("div");
      comp_task_content_el.classList.add("comp-content");
      task_content_el.innerText = task;
      comp_task_el.appendChild(comp_task_content_el);
      const comp_task_input_el = document.createElement("input");
      comp_task_input_el.classList.add("comp-text");
      comp_task_input_el.type = "text";
      comp_task_input_el.value = task_input_el.value;
      comp_task_input_el.setAttribute("readonly", "readonly");
      comp_task_content_el.appendChild(comp_task_input_el);
      comp_task_el.appendChild(comp_task_content_el);
      comp_list_element.appendChild(comp_task_el);
      console.log("Task Completed");
    });
  });
});
