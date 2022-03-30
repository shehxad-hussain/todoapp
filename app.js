let input = document.getElementById('input');
let todolist = document.getElementById('todolist');


let list  = [];

const todoApp = {
    addlist() {
        if(input.value) {
            list.push(input.value)
            input.value = ''
        }else{
            alert('Input Student Name')
        }
        this.myFunction()
    },

    myFunction() {
     todolist.innerHTML = ''
     list.forEach((value,index) => {
         todolist.innerHTML += `
         <li class = "list">
         <div>
         ${value}
         </div>
         <div class="class">
         <div onclick = "todoApp.updateApp(${index})">Edit</div>
         <div onclick = "todoApp.deltApp(${index})">Delete</div>
         </div>
         </li>
         `
     })
    },

  deltApp(index) {
    if(list) {
        list.splice(index,1)
    }
    this.myFunction()
  },

  updateApp(index) {
      let update = prompt('Update New Task')
    if(update) {
        list.splice(index,1,update)
    }
    this.myFunction()
  },
  
  clearApp() {
    if(list.length) {
        list.splice(0,list.length)
    }
    this.myFunction()
},

}
