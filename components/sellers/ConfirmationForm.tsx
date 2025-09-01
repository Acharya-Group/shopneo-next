"use client";
import React, { useState } from "react";

const ConfirmationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    refBy: "",
    refByMobile: "",
    dist: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch(`https://formsubmit.co/ajax/sumitkhan.dhana@gmail.com`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        // reset fields
        setFormData({
          name: "",
          email: "",
          number: "",
          refBy: "",
          refByMobile: "",
          dist: "",
          message: "",
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting form");
    }
  };

  return (
    <div className="container mx-auto my-10 p-4">
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white shadow-md border-amber-500 border rounded-2xl p-6 space-y-4"
      >
        <h2 className="text-center font-semibold text-xl">Seller Confirmation</h2>

        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        {/*  Number */}
        <div>
          <label htmlFor="number" className="block text-sm font-medium text-gray-700">
            Number
          </label>
          <input
            type="tel"
            id="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Ref By */}
        <div>
          <label htmlFor="refBy" className="block text-sm font-medium text-gray-700">
            Referred By (Name)
          </label>
          <input
            type="text"
            id="refBy"
            name="refBy"
            value={formData.refBy}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Ref By Mobile */}
        <div>
          <label htmlFor="refByMobile" className="block text-sm font-medium text-gray-700">
            Referred By (Mobile)
          </label>
          <input
            type="tel"
            id="refByMobile"
            name="refByMobile"
            value={formData.refByMobile}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* District */}
        <div>
          <label htmlFor="dist" className="block text-sm font-medium text-gray-700">
            District
          </label>
          <input
            type="text"
            id="dist"
            name="dist"
            value={formData.dist}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-yellow-500 cursor-pointer hover:bg-yellow-400 text-white font-medium py-2 px-4 rounded-lg transition"
        >
          Submit
        </button>
      </form>

      {/* Success Popup */}
      {success && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center space-y-4">
            <h3 className="text-green-600 font-semibold text-lg">✅ Success!</h3>
            <p>Your message has been sent successfully.</p>
            <button
              onClick={() => setSuccess(false)}
              className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-400"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConfirmationForm;
