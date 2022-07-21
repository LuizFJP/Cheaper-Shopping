import NavBar from "../utils/navBar";
import UserRanking from "./user";
import "../style/ranking.css"

function Ranking() {
    return (
      <div>
        <header >
          <NavBar></NavBar>
        </header>
        <body>
          <section className="list-ranking">
            <UserRanking />
          </section>
        </body>
      </div>
    );
  }
  
  export default Ranking;
  