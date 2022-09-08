const CartAdjuster = ({ increment, decrement, amount }) => {
  return (
    <div className="w-full flex items-center">
      <button className="border-none" onClick={decrement}>
        &lt;
      </button>
      {amount}
      <button className="border-none" onClick={increment}>
        &gt;
      </button>
    </div>
  );
};

export default CartAdjuster;
