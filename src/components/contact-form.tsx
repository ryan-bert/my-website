export default function ContactForm() {
    return (
      <form
        action="https://example.com/submit-form" // Replace with your actual form handling endpoint
        method="POST"
        className="flex flex-col w-full max-w-lg p-8 space-y-6"
      >
        <div className="flex flex-col">
          <label htmlFor="name" className="text-white font-semibold mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="px-4 py-2 rounded-lg bg-secondary outline outline-4 outline-tertiary focus:outline-white"
          />
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="email" className="text-white font-semibold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="px-4 py-2 rounded-lg bg-secondary outline outline-4 outline-tertiary focus:outline-white"
          />
        </div>
  
        <div className="flex flex-col">
          <label htmlFor="message" className="text-white font-semibold mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="px-4 py-2 rounded-lg bg-secondary outline outline-4 outline-tertiary focus:outline-white"
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