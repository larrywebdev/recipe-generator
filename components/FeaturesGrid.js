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
    description: `Decide once, relax later. When meals are planned ahead, there&apos;s
            nothing left to debate when hunger hits.`,
  },
];
export default function FeaturesCard() {
  return (
    <div className="py-15 px-5 grid">
      <h2 className="text-3xl font-semibold mt-4 mb-12 text-center">
        Meals without the stress
      </h2>
      <div className="flex">
        {features.map(({ title, description }, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
