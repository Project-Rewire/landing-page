export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: 1,
              title: "Assessment",
              description: "Complete AI-driven questionnaires to assess your addiction levels and type."
            },
            {
              step: 2,
              title: "Personalized Plan",
              description: "Receive a tailored, step-by-step approach to overcome your specific addiction."
            },
            {
              step: 3,
              title: "Ongoing Support",
              description: "Get continuous assistance from Rebot and the community as you progress."
            }
          ].map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="rounded-full bg-primary text-primary-foreground w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-4 text-base md:text-lg font-bold">
                {step.step}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-center mb-2">{step.title}</h3>
              <p className="text-center text-sm md:text-base text-gray-500 dark:text-gray-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}