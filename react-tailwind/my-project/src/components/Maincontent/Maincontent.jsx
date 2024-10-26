import React from 'react';

const MainContent = () => {
  const aiNewsPosts = [
    {
      id: 1,
      title: "Google's DeepMind Introduces AlphaFold 2.0",
      content: "DeepMind releases an updated version of AlphaFold, improving protein structure prediction accuracy and speed.",
    },
    {
      id: 2,
      title: "OpenAI's GPT-4 Showcases Advanced Language Understanding",
      content: "The latest iteration of GPT demonstrates significant improvements in natural language processing and generation.",
    },
    {
      id: 3,
      title: "AI-Powered Autonomous Vehicles Make Strides in Urban Testing",
      content: "Self-driving cars equipped with advanced AI systems show promising results in complex city environments.",
    },
    {
      id: 4,
      title: "IBM's Project Debater AI Competes in Human Debates",
      content: "IBM's AI system engages in live debates with human experts, showcasing advancements in argumentative AI.",
    },
    {
      id: 5,
      title: "AI in Healthcare: New Algorithm Detects Diseases from Medical Imaging",
      content: "Researchers develop an AI model that outperforms human radiologists in identifying certain medical conditions.",
    },
    {
      id: 6,
      title: "Ethical AI: New Guidelines for Responsible AI Development",
      content: "Tech giants and governments collaborate to establish ethical standards for AI research and implementation.",
    },
  ];

  return (
    <main className="flex-grow p-4 md:p-6 lg:p-8">
      <h2 className="text-2xl font-bold mb-4">Latest AI News</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {aiNewsPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-600">{post.content}</p>
            <a href="#" className="text-blue-600 hover:text-blue-800 mt-2 inline-block">Read more</a>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MainContent;