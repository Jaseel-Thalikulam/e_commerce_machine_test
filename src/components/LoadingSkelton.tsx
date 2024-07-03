import { Skeleton } from "antd";

const LoadingSkeleton = () => {
  return (
    <div className="product--card">
      <div className="image--wrapper">
        <Skeleton.Image  />
      </div>
      <div className="product--details">
        <h3><Skeleton.Input  /></h3>
        <p><Skeleton.Input  /></p>
        <Skeleton.Button  />
        <div className="price-add-to-cart-wrapper">
          <h2><Skeleton.Button  /></h2>
          <Skeleton.Button  />
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
