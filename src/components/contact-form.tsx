import { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      await addDoc(collection(db, "contactMessages"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: new Date(),
      });

      setSubmitMessage("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form: ", error);
      setSubmitMessage("Failed to send the message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col p-8 space-y-6 w-[100%] min-w-[30vw]">
      <div className="flex flex-col">
        <label htmlFor="name" className="text-white font-semibold mb-2">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
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
          value={formData.email}
          onChange={handleChange}
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
          value={formData.message}
          onChange={handleChange}
          required
          className="px-4 py-2 rounded-lg bg-secondary outline outline-4 outline-tertiary focus:outline-white"
        ></textarea>
      </div>

      <button
        type="submit"
        className="px-4 py-2 my-button"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      {submitMessage && (
        <p className={submitMessage.includes("successfully") ? "text-green-500" : "text-red-500"}>
          {submitMessage}
        </p>
      )}
    </form>
  );
}