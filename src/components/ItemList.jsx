import { useDispatch } from "react-redux";
import { CDN_URL } from "../utilis/contants";
import { addItems } from "../utilis/cartSlice";

const ItemList=({items})=>{
       const dispatch=useDispatch();
       const handleAddItem=(item)=>{
        dispatch(addItems(item))
       };
    console.log(items);
return <div>
    {items.map((item)=>(
        <div key={item.card.info.id} className="p-2 m-4 border-purple-300 border-b-2 text-left flex justify-between">
            <div className="w-9/12">
            <div className="py-2" >
                <span className="font-bold">{item.card.info.name}</span>
                <span className="font-semibold">
                    -₹{item.card.info.price?item.card.info.price/100:item.card.info.defaultPrice/100}
                    </span>
            </div>
        <p className="text-xs">{item.card.info.description}</p>
        </div>
        <div className="w-3/12 p-4 relative"> 
    <img src={CDN_URL+item.card.info.imageId} className="w-full rounded-lg shadow-2xl" />
    <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 p-2 bg-purple-300 shadow-lg font-bold rounded-xl" onClick={() => handleAddItem(item)}>
        Add+
    </button>
</div>
        </div>
    ))}
</div>
};
export default ItemList;