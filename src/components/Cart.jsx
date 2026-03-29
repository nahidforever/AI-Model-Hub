import React from "react";
import { toast } from "react-toastify";

const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = () => {
    setCarts([]);
    toast.success("Payment Successful");
  };

  const handleDelete = (item) => {
    const filteredItem = carts.filter(
      (filterItem) => filterItem.id !== item.id,
    );
    setCarts(filteredItem);
    toast.success("Item Deleted Successfully");
  };

  return (
    <div className="p-10 max-w-300 mx-auto">
      <h1 className="text-2xl font-bold">Your Cart</h1>
      {carts.length === 0 ? (
        <p className="text-center text-2xl">Cart is empty</p>
      ) : (
        <>
          <div className="space-y-5">
            {carts.map((item) => (
              <div key={item.id}>
                <div className="flex items-center justify-between border rounded-lg p-3">
                  <div className="flex items-center gap-3">
                    <img
                      className="h-20 w-20 object-contain"
                      src={item.image}
                      alt=""
                    />
                    <div>
                      <h2 className="text-2xl font-bold">{item.title}</h2>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="text-2xl font-bold">
                      ${item.price}/Month
                    </div>

                    <button
                      onClick={() => handleDelete(item)}
                      className="btn rounded-full btn-error"
                    >
                      X
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between bg-black text-white p-5 mt-5 rounded-lg text-2xl">
            <div>Total</div>
            <div>$ {totalPrice}</div>
          </div>

          <button
            onClick={handlePayment}
            className="btn w-full mt-5 bg-red-500 rounded-2xl text-white text-2xl p-6"
          >
            Proceed to CheckOut
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
