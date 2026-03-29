import React, { useState } from "react";
import { toast } from "react-toastify";

const ModelsCard = ({ model, setCarts, carts }) => {
  const [isSubscribe, setIsSubscribe] = useState(false);

  const handleSubscription = () => {
    setIsSubscribe(true);

    const isFound = carts.find((item) => item.id === model.id);

    if (isFound) {
      toast.error("Item Already in Cart!");
      return;
    }

    setCarts([...carts, model]);
    toast.success("Item Added to Cart!");
  };

  return (
    <div className="shadow-lg rounded-lg border overflow-hidden border-zinc-300">
      <div className="flex justify-center items-center h-56 bg-zinc-200">
        <img className="h-40 w-40 object-contain" src={model.image} alt="" />
      </div>

      <div className="p-4 space-y-4">
        <h2 className="text-2xl font-bold">{model.title}</h2>
        <p>{model.description}</p>
        <div className="text-2xl font-bold">${model.price}/month</div>

        <button
          onClick={handleSubscription}
          className="btn w-full bg-red-500 rounded-lg text-white mt-6"
        >
          {isSubscribe ? "Subscribed" : "Subscribe Now"}
        </button>
      </div>
    </div>
  );
};

export default ModelsCard;
