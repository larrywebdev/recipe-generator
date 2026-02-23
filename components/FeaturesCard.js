const features = [
  {
    title: `Eat your way`,
    description: `Stick to familiar eating styles or shape your own. Whether you lean plant-based, low-carb, or somewhere in between, everything adjusts to your preferences`,
  },
  {
    title: `Waste less food`,
    description: `Plan with intention and stop letting ingredients expire. Add
            what's already in your kitchen and meals will naturally revolve
            around using it first.`,
  },
  {
    title: `No more daily food stress`,
    description: `Decide once, relax later. When meals are planned ahead, there's
            nothing left to debate when hunger hits.`,
  },
];
export default function FeaturesCard() {
  return (
    <div className="pb-20 px-5 sm:px-2 grid my-20 mx-auto max-w-7xl">
      <h2 className="text-3xl font-semibold mt-4 mb-12 text-center">
        <span className="text-amber-400">Meals</span> without the stress
      </h2>
      <div className="grid md:flex gap-6">
        {features.map(({ title, description }, index) => (
          <div
            key={index}
            className="flex-1 border-2 border-black/60 rounded-lg p-5 min-h-35"
          >
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="w-full">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
