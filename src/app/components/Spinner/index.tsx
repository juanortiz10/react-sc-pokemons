const Spinner = () => (
  <div className="flex justify-center items-center space-x-2 h-64">
    <div className="w-4 h-4 bg-white rounded-full animate-bounce"></div>
    <div className="w-4 h-4 bg-white rounded-full animate-bounce animation-delay-200"></div>
    <div className="w-4 h-4 bg-white rounded-full animate-bounce animation-delay-400"></div>
  </div>
);

export default Spinner;
