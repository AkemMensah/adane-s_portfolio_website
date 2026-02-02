"use client";
import React, { useState } from "react";
import { HiOutlineBadgeCheck } from "react-icons/hi";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" }); // Clear error on type
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/contactAPI", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000); // Hide after 5s
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-8 md:p-12 bg-slate-900/50 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl">
      <div className="text-center mb-10">
        <h4 className="text-3xl md:text-4xl font-bold text-white mb-2">Send a Message</h4>
        <p className="text-gray-400">Have a specific inquiry or just want to say hi?</p>
      </div>

      {submitted && (
        <div className="mb-8 flex items-center gap-3 justify-center text-green-400 bg-green-400/10 border border-green-400/20 p-4 rounded-2xl animate-fade-in">
          <HiOutlineBadgeCheck size={24} />
          <span className="font-medium">Message received! I&apos;ll get back to you shortly.</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Field */}
          <div className="space-y-2 text-left">
            <label htmlFor="name" className="text-sm font-semibold text-gray-300 ml-1">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className={`w-full bg-slate-950 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-2xl p-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600/50 transition-all`}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1 ml-1">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div className="space-y-2 text-left">
            <label htmlFor="email" className="text-sm font-semibold text-gray-300 ml-1">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
              className={`w-full bg-slate-950 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-2xl p-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600/50 transition-all`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>}
          </div>
        </div>

        {/* Message Field */}
        <div className="space-y-2 text-left">
          <label htmlFor="message" className="text-sm font-semibold text-gray-300 ml-1">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="How can I help you?"
            className={`w-full bg-slate-950 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-2xl p-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600/50 transition-all resize-none`}
          />
          {errors.message && <p className="text-red-500 text-xs mt-1 ml-1">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={loading}
            className="w-full md:w-auto min-w-[200px] bg-purple-600 hover:bg-purple-700 disabled:bg-purple-800/50 text-white font-bold py-4 px-10 rounded-2xl transition-all shadow-lg shadow-purple-600/20 active:scale-95 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending...
              </>
            ) : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;