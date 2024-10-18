"use client"

const Section1= () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 mt-10">
      <div className="container mx-auto px-4">        
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-lg text-gray-600">
            Learn more about our journey and why we created this app
          </p>
        </section>        
        <section className="bg-white shadow-md rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-700 text-lg">
            Our mission is to help individuals stay organized, focused, and productive. We believe that everyone can achieve their goals with the right tools, and our todo list app was created to provide a seamless, intuitive solution for managing tasks.
          </p>
        </section>
        <section className="bg-white shadow-md rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
          <p className="text-gray-700 text-lg">
            We started as a small team of productivity enthusiasts who struggled with managing our own tasks. From this struggle came the idea of creating a simple, yet powerful todo list app. What began as a personal project quickly evolved into a tool that we wanted to share with the world.
          </p>
        </section>        
        <section className="bg-white shadow-md rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Features</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
            <li>Easy task management with intuitive interface</li>
            <li>Set deadlines and receive reminders</li>
            <li>Organize tasks by priority and categories</li>
            <li>Collaborate with others and share tasks</li>
            <li>Track your progress and improve productivity</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Section1;
