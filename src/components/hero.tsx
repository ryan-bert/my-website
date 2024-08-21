export default function Hero() {
  return (
    <div className="bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: "url('hero.jpg')" }}>
      <div className="text-white text-center">
        <h1 className="text-5xl font-bold">Welcome Siteto My </h1>
        <p className="text-xl mt-4">Your adventure starts here.</p>
        <button className="mt-8 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg">
          Get Started
        </button>
      </div>
    </div>
  );
}