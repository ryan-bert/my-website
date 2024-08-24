export default function Hero() {
  return (
    <div className="relative h-[50vh] flex items-center justify-center">
      {/* Background Image with Gradients at Top and Bottom */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-md"
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.9)), url('hero.jpg')",
        }}
      ></div>

      {/* Content */}
      <div className="w-3/4 relative z-10 text-white text-center p-8">
        <h1 className="text-5xl font-alpha">Welcome to My Site</h1>
        <p className="text-xl mt-4 typing-animation">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab velit doloremque nulla impedit molestias numquam, minima totam aut repellat veniam, quaerat distinctio sint adipisci. Deleniti commodi eveniet dolor vel saepe?</p>
        <button className="mt-8 px-6 py-2 bg-white hover:bg-blue-600 text-black font-semibold rounded-lg">
          Get Started 
        </button>
      </div>
    </div>
  );
}