
import "../style/horizontalScroll.css"

function HorizontalScroll(props) {
    return(
        <div className="wrapper">
        {props.items.map((item, index) => (
          <div key={index} className="item">
            <img className="item-img" src={item["src"]} alt={item["nome"]} />
            <p>{item["nome"]}</p>
            <p>{item["price"]}</p>
          </div>
        ))}
      </div>
    )
}

export default HorizontalScroll;
