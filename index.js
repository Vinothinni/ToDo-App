window.addEventListener('load',()=>{
     const form = document.querySelector('#todo-input-form');
     const input = document.querySelector('#todoinput');
     const list_el = document.querySelector("#list-todo");

     form.addEventListener('submit',(e)=>{
        e.preventDefault();
        const task = input.value;

        if(!task){
            alert("Please fill out the task")
            return;
        }

        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content_el = document.createElement("div");
        task_content_el.classList.add('content');
        

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
      
        task_content_el.appendChild(task_input_el);

        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions");

        const task_delete_el = document.createElement("button")
        task_delete_el.classList.add("Delete");
        task_delete_el.innerHTML = "Delete";

        task_content_el.appendChild(task_delete_el);

        task_el.appendChild(task_actions_el);


        list_el.appendChild(task_el)

        input.value="";

       
       
       
        task_delete_el.addEventListener('click',()=>{
            list_el.removeChild(task_el);

        })


     })

     const initSearchListener=()=>{
        document.getElementById('search').addEventListener('keyup',($event)=>{
            console.log($event.target.value);

        })

     }

})