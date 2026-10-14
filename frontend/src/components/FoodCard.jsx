import { Plus, Leaf } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'

export default function FoodCard({ food }) {
  const { addItem } = useCart()
  return (
    <article className="food-card">
      <div className="food-image-wrap"><img src={food.image} alt={food.name} loading="lazy" />
        {food.tag && <span className="food-tag">{food.tag}</span>}
        <span className={`veg-mark ${food.vegetarian ? 'is-veg' : 'is-nonveg'}`} title={food.vegetarian ? 'Vegetarian' : 'Non-vegetarian'} />
      </div>
      <div className="food-card-body">
        <div className="food-name-row"><h3>{food.name}</h3><strong>₹{food.price}</strong></div>
        <p>{food.description}</p>
        <button className="add-button" onClick={() => addItem(food)}><Plus size={16} /> Add to order</button>
      </div>
    </article>
  )
}
