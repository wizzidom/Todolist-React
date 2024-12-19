import React from "react";
export default function Todo() {
  const [todolist, setTodolist] = React.useState([]);

  function AddToDo(formData) {
    let newTodo = {
      id: todolist.length === 0 ? 1 : todolist[todolist.length - 1].id + 1,
      taskname: formData.get("todoItem"),
    };
    setTodolist((prevTodoList) => [...prevTodoList, newTodo]);
  }

  function remove(key) {
    const newList = todolist.filter((task) => {
      if (task.id === key) {
        return false;
      } else {
        return true;
      }
    });
    setTodolist(newList);
  }
  function edit() {
    console.log("edit clicked");
  }
  return (
    <main>
      <h1 className="banner">Welcome to todoist- The number one organiser</h1>

      <form action={AddToDo}>
        <label htmlFor="todoItem">Enter a todo:</label>
        <input type="text" name="todoItem" />

        <button>Add</button>
      </form>

      <div className="todolist">
        <ol className="todoItems">
          {todolist.map((todo) => (
            <div key={todo.id} className="listContainer">
              <div className="todos">
                <li>{todo.taskname}</li>
              </div>
              <div className="buttons">
                <button
                  onClick={() => {
                    remove(todo.id);
                  }}
                  className="delete"
                >
                  Delete
                </button>
                <button onClick={edit} className="edit">
                  Edit
                </button>
              </div>
            </div>
          ))}
        </ol>
      </div>
    </main>
  );
}
