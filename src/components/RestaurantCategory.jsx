const RestaurantCategory=(data)=>{
    console.log(data);
    return(
        <div className="w-6/12 mx-auto my-4 bg-pink-100 shadow-lg p-4 flex justify-between  ">
            <span className="font-bold text-lg">
               {data.data.title}({data.data.itemCards.length})
            </span>
            <span>🔽</span>
        </div>
    )
}
export default RestaurantCategory;