import { shimmer_card_unit } from "../constants";
//import "./Shimmer.css";

// Shimmer card to display with animation
const CardShimmer = () => {
  return (
    <div className="border-2 h-60 w-60 p-1 mb-3 border-gray-300 shadow-md shadow-gray-400">
      <div className="h-36 w-56 bg-slate-300  "></div>
      <div className="w-36 bg-slate-300 h-3 mt-2"></div>
      <div className="w-48 bg-slate-300 h-3 mt-2 "></div>
      <div className="w-56 bg-slate-300 mt-4 h-3"></div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div 
      data-testid = "shimmer"
      className="flex flex-wrap gap-6 justify-center"
      >
      {new Array(shimmer_card_unit).fill(0).map((element, index) => {
        return <CardShimmer key={index} />;
      })}
    </div>
  );
};
export default Shimmer;