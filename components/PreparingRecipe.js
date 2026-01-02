export default function PreparingRecipe() {
  return (
    <div className="flex items-center space-x-1 max-h-max">
      <p className="text-lg font-medium">Preparing recipe</p>
      <div className="flex justify-center items-center space-x-1 mt-2.5">
        <div className="bg-black rounded-full w-1.25 h-1.25 dot dot1"></div>
        <div className="bg-black rounded-full w-1.25 h-1.25 dot dot2"></div>
        <div className="bg-black rounded-full w-1.25 h-1.25 dot dot3"></div>
      </div>
    </div>
  );
}
