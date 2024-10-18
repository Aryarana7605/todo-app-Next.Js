"use client"

const Section2 = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">How It Works</h2>
          <p className="text-lg text-gray-600">
            Follow these simple steps to organize your tasks efficiently and boost productivity.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
        
          <div className="bg-white shadow-lg rounded-lg p-8 text-center">
          <svg  className="text-4xl text-blue-600 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Create Tasks</h3>
            <p className="text-gray-600">
              Add tasks by clicking the <span className="font-semibold">"Add Task"</span> button. You can give each task a title, set deadlines, and add important details.
            </p>
          </div>

          
          <div className="bg-white shadow-lg rounded-lg p-8 text-center">
          <svg className="text-4xl text-blue-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
</svg>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">Organize & Prioritize</h3>
            <p className="text-gray-600">
              Group tasks into categories, assign priorities, and organize them based on urgency and importance to stay on track.
            </p>
          </div>

          
          <div className="bg-white shadow-lg rounded-lg p-8 text-center">
          <svg className="text-4xl text-blue-600 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Complete & Track Progress</h3>
            <p className="text-gray-600">
              Mark tasks as completed and watch your progress grow. Keep track of your productivity and stay motivated to reach your goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
