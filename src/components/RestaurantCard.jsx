import { CDN_URL } from "../utilis/contants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const name = resData?.info?.name || 'N/A';
  const cuisine = resData?.info?.cuisines ? resData.info.cuisines.join(', ') : 'N/A';
  const avgRatingString = resData?.info?.avgRatingString || 'N/A';
  const costForTwo = resData?.info?.costForTwo || 'N/A';
  const deliveryTime = resData?.info?.sla?.deliveryTime || 'N/A';
  const cloudinaryImageId = resData?.info?.cloudinaryImageId || 'placeholder-image-id';
  const discountHeader = resData?.info?.aggregatedDiscountInfoV3?.header || '';
  const locality = resData?.info?.locality || 'N/A';
  const isOpen = resData?.info?.availability?.opened ? 'Open Now' : 'Closed';
  const totalRatings = resData?.info?.totalRatingsString || 'N/A';

  const imageUrl = `${CDN_URL}${cloudinaryImageId}`;

  return (
    <div className="m-4 p-4 w-[250px] h-[440px] bg-gradient-to-r from-pink-100 to-pink-200 rounded-xl shadow-lg transform transition-transform hover:scale-105">
      <img className="h-36 w-full object-cover rounded-md shadow-md" alt="Restaurant" src={imageUrl} />
      <div className="mt-4 flex flex-col justify-between flex-grow">
        <h3 className="font-bold text-xl text-gray-800 mb-2 truncate">{name}</h3>
        <h4 className="text-sm text-gray-600 mb-1 truncate">{cuisine}</h4>
        {discountHeader && (
          <div className="bg-yellow-200 text-yellow-800 p-2 rounded-md text-xs font-medium mb-2">
            {discountHeader}
          </div>
        )}
        <div className="flex items-center justify-between text-sm text-gray-700 mb-2">
          <div className="flex items-center space-x-1">
            <span className="font-bold text-yellow-500">{avgRatingString}</span>
            <span>⭐</span>
          </div>
          <span className="text-gray-500">•</span>
          <span className="font-medium">{costForTwo}</span>
          <span className="text-gray-500">•</span>
          <span className="font-medium">{deliveryTime} min</span>
        </div>
        <div className="flex justify-between items-center text-sm text-gray-600">
          <span>{locality}</span>
          <span className={`text-xs px-2 py-1 rounded-full ${isOpen === 'Open Now' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
            {isOpen}
          </span>
        </div>
        <div className="text-xs text-gray-500 mt-2">
          {totalRatings} Ratings
        </div>
      </div>
    </div>
  );
};

export const withPromtedLabel=(RestaurantCard)=>{
  return (props) => {
    return (
      <div className="relative">
        <RestaurantCard {...props} />
        {props.resData?.info?.veg && (
          <label className="absolute top-5 left-5 bg-green-500 text-purple-900 px-5 py-1 rounded-full text-xs font-semibold shadow-md">
            Veg
          </label>
        )}
      </div>
       );
  };
};

export default RestaurantCard;
