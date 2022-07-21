import NavBar from "../utils/navBar";
import List from "./list";
import "../style/todo.css"


function Todo() {
    return (   
        <body>
          <header>
          <NavBar></NavBar>
        </header>
          <List />
        </body>

    );
  }
  
  export default Todo;
  