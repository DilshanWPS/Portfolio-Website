const Contact = () => {
  return (
    <section id="contact" className="h-[500px] bg-white py-20 px-4">
      <h2 className="text-3xl font-extrabold text-black text-center mb-6">
        Contact Me
      </h2>
      <form className="max-w-xl mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-2 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border p-2 rounded"
        />
        <textarea
          placeholder="Your Message"
          className="w-full border p-2 rounded h-32"
        ></textarea>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
