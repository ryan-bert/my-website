export default function ContactForm() {
    return (
      <form
        action="https://example.com/submit-form" // Replace with your actual form handling endpoint
        method="POST"
        className="flex flex-col w-full max-w-lg space-y-6 bg-secondary p-8 rounded-lg outline outline-4 outline-tertiary my-shadow"
      >
        <div className="flex flex-col">
          <label htmlFor="name" className="text-white font-semibold mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="bg-white text-black px-4 py-2 rounded-lg focus:outline-none"
          />
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="email" className="text-white font-semibold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="bg-white text-black px-4 py-2 rounded-lg focus:outline-none"
          />
        </div>
  
        <div className="flex flex-col">
          <label htmlFor="message" className="text-white font-semibold mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="bg-white text-black px-4 py-2 rounded-lg focus:outline-none"
          ></textarea>
        </div>
  
        <button
          type="submit"
          className="px-4 py-2 my-button"
        >
          Send Message
        </button>
      </form>
    );
  }