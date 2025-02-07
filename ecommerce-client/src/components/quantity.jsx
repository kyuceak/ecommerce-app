import { useState } from "react";

function Quantity({ items, setCard, index }) {
  const initialQuantity = items[index]?.count || 1;
  const [quantity, setQuantity] = useState(initialQuantity);


  const updateCardQuantity = (newQuantity) => {
    setCard((prevCard) => {
      const updatedCard = [...prevCard];
      updatedCard[index] = { ...updatedCard[index], count: newQuantity };
      return updatedCard;
    });
  };

  const handleInputChange = (e) => {
    const newQuantity = Number(e.target.value);
    setQuantity(newQuantity);
    updateCardQuantity(newQuantity);

  };

  const handleMinus = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      updateCardQuantity(newQuantity);

    }
  };

  const handlePlus = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateCardQuantity(newQuantity);
 
  };

  return (
    <div className="item-count">
      <button onClick={handleMinus}>
        <i className="fas fa-minus"></i>
      </button>
      <input
        type="number"
        value={quantity}
        onChange={handleInputChange}
      />
      <button onClick={handlePlus}>
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
}

export default Quantity;
