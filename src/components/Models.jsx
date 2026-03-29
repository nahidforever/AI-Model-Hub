import React, { use } from "react";
import ModelsCard from "./ModelsCard";

const Models = ({ modelsPromise }) => {
  const models = use(modelsPromise);
  return (
    <div className="py-20 max-w-300 mx-auto">
      <div className="text-center">
        <h2 className="font-bold text-4xl">Choose Your AI Model</h2>
        <p>One Subscription gives you access to all frontier AI Models</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-7">
        {models.map((model) => (
          <ModelsCard key={model.id} model={model}></ModelsCard>
        ))}
      </div>
    </div>
  );
};

export default Models;
