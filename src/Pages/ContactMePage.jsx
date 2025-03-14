import React, { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { db } from "../Utils/firebase";
import { ConnectionComponent } from "../Components/ConnectionComponent";
import { LinkedIn } from "../Components/ConnectionComponent";

const ContactMePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "India",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const docRef = await addDoc(collection(db, "contacts"), {
        ...formData,
        timestamp: new Date(),
      });
      setStatus("success");
      setFormData({ name: "", email: "", location: "India" });
    } catch (error) {
      setStatus("error");
      console.error("Error adding document: ", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-black p-4 sm:p-6 md:p-12 lg:p-16">
      <div className="max-w-6xl mx-auto bg-[#1A1A1A] rounded-3xl p-6 sm:p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Section */}
          <div className="space-y-6 sm:space-y-8">
            <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-[#1E1E1E] rounded-full">
              <span className="text-sm sm:text-base text-[#BFFF00]">
                Contact Info
              </span>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Get in Touch With Us
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-400">
                Here to Support You! Reach Out for Assistance, Feedback, or
                Questions
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                Let's Talk About it:
              </h2>
              <div className="space-y-3 sm:space-y-4">
                <a
                  href="tel:+918279480784"
                  className="flex items-center gap-2 sm:gap-3 bg-[#1E1E1E] p-3 sm:p-4 rounded-xl"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#BFFF00] rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base text-white">
                    +91 8279480784
                  </span>
                </a>
                <a
                  href="mailto:purplerain.studio08@gmail.com"
                  className="flex items-center gap-2 sm:gap-3 bg-[#1E1E1E] p-3 sm:p-4 rounded-xl"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#BFFF00] rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base text-white truncate">
                    sachinarora.8279@gmail.com
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-[#1E1E1E] p-6 sm:p-8 rounded-3xl border border-[#BFFF00]/20">
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-4">
                  Get a quote
                </h2>
                <p className="text-sm sm:text-base text-gray-400">
                  Fill up the form and our Team will get back to you within 24
                  hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-sm sm:text-base text-gray-400 mb-1 sm:mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#2A2A2A] text-white p-2.5 sm:p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BFFF00]/50"
                    placeholder="Full Name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm sm:text-base text-gray-400 mb-1 sm:mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#2A2A2A] text-white p-2.5 sm:p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BFFF00]/50"
                    placeholder="email@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm sm:text-base text-gray-400 mb-1 sm:mb-2">
                    Location
                  </label>
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full bg-[#2A2A2A] text-white p-2.5 sm:p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BFFF00]/50"
                  >
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Canada">Canada</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#BFFF00] text-black font-semibold py-2.5 sm:py-3 rounded-lg hover:bg-[#BFFF00]/90 transition-colors disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {status === "success" && (
                  <p className="text-sm sm:text-base text-green-400 text-center">
                    Message sent successfully!
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm sm:text-base text-red-400 text-center">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold pt-10 sm:pt-16 md:pt-20 text-[#BFFF00]">
          Let's Weave Connections Together !
        </h2>
      </div>
      <div className="flex items-center justify-center gap-4 pt-10 sm:pt-16 md:pt-20">
        <div>
          <LinkedIn />
        </div>
      </div>
      <ConnectionComponent />
    </div>
  );
};

export default ContactMePage;
