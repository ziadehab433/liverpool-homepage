import "./ItemListing.css";
import Button from "../Button/Button";

const ItemListing = ({item}) => {
  return (
    <div className="itemListing-container">
      <div>
        <img
          src={item.img}
          alt=""
        />
        <div className="itemListing-title">{item.title}</div>
      </div>
      <div>
        <div className="itemListing-price">{item.price}</div>
        <Button
          style={{
            backgroundColor: "black",
            color: "white",
          }}
        >
          BUY NOW {">"}
        </Button>
      </div>
    </div>
  );
};

export default ItemListing;
