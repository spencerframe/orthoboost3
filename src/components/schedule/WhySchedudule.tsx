export default () => {
  const benefits = [
    {
      icon: "🎯",
      title: "Personalized Strategy",
      description: "Get tailored solutions that fit your unique business needs"
    },
    {
      icon: "⚡",
      title: "Save Time",
      description: "Skip the back-and-forth emails with direct, real-time communication"
    },
    {
      icon: "💡",
      title: "Expert Insights",
      description: "Tap into years of industry experience in just one call"
    },
    {
      icon: "🤝",
      title: "Clear Next Steps",
      description: "Leave the call with an actionable plan forward"
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Schedule a Call?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="font-semibold text-xl mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};