import { Button, Image, Tag } from "antd";
import { Product } from "../types/productTypes";
import { truncateText } from "../lib/util";
import { useCustomContext } from "../context/CustomContext";

function ProductCard({
  product: { category, description, image, price, title, id },
}: {
  product: Product;
}) {
  const { addToCart,cart } = useCustomContext();
  const isInCart = cart.some((item) => item.id === id);
  return (
    <div className="product--card">
      <div className="image--wrapper">
        <Image src={image} />
      </div>
      <div className="product--details">
        <h3>{truncateText(title, "title", 30)}</h3>
        <p>{truncateText(description, "description", 60)}</p>
        <Tag color="gold">{category}</Tag>
        <div className="price-add-to-cart-wrapper">
          <h2>${price}</h2>
          <Button className={`${isInCart&&"active--btn"} btn`} size="middle" onClick={() => addToCart({category, description, image, price, title, id})}>
           {isInCart?"Already In Cart":" Add to cart"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
