const Contact = () => {
    return (
      <div className="contact-container max-w-screen-md mx-auto p-8 bg-white rounded-lg shadow-lg mt-10">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <p className="text-lg text-gray-700 text-center mb-8">
          Have any questions or concerns? Feel free to reach out to us at Food Ordering Website!
        </p>
        <form className="space-y-6">
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              rows="5"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
        <div className="mt-10 text-center">
          <h2 className="text-2xl font-bold">Contact Information</h2>
          <p className="text-lg text-gray-700 mt-2">Email: himanshuverma57251@gmail.com</p>
          <p className="text-lg text-gray-700">Phone: +91 95360 45394</p>
          <p className="text-lg text-gray-700">Business: Food Ordering </p>
        </div>
      </div>
    );
  };
  
  export default Contact;
  