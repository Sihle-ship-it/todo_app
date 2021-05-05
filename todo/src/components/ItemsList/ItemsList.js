import React from "react";

const ItemsList = ({ items }) => {
  return (
    <div text-white>
      <ol className="list-disc">
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ol>
    </div>
  );
};

export default ItemsList;
