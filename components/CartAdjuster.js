import { Button } from "@mantine/core";

const CartAdjuster = ({ increment, decrement, amount }) => {
  return (
    <div className="w-full flex items-center">
      <Button variant="default" style={{ border: "none" }} onClick={decrement}>
        &lt;
      </Button>
      {amount}
      <Button variant="default" style={{ border: "none" }} onClick={increment}>
        &gt;
      </Button>
    </div>
  );
};

export default CartAdjuster;
