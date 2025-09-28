import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!formData.message) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch('/api/contactAPI', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        if (response.ok) {
          setSubmitted(true);
          setFormData({
            name: '',
            email: '',
            message: ''
          });
        } else {
          const errorData = await response.json();
          console.error('Error submitting form:', errorData.error);
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
  };

  return (
    <div className='contact-form text-center mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 bg-slate-700'>
      <h4 className='max-920:text-5xl'>Send a Message:</h4>
      {submitted && (
        <p className="mt-2 text-green-500 text-xl bg-transparent border border-purple-700 rounded p-3">
          Thank you for your message!
        </p>
      )}
      <form onSubmit={handleSubmit} className='form w-full flex flex-wrap items-center justify-center gap-4 max-640:flex-col max-920:flex-col max-1024:flex-col '>
        <div className='address flex flex-col items-center w-1/3 max-640:w-full mt-4 max-920:w-2/3 max-1024:w-2/3 max-920:text-2xl'>
          <div className='contact_name text-left w-full my-4 '>
            <label htmlFor="name">Name:</label>
            <br />
            <input
              className="w-full h-10 max-920:h-20 border-black border-2 rounded-md"
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder='Enter your name'
              required
            />
            {errors.name && <span className="error text-red-600">{errors.name}</span>}
          </div>
          <div className='contact_email w-full text-left '>
            <label htmlFor="email">Email:</label>
            <br />
            <input
              className='w-full h-10 max-920:h-20 border-black border-2 rounded-md'
              type="text"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder='Enter email'
            />
            {errors.email && <span className="error text-red-600">{errors.email}</span>}
          </div>
        </div>
        <div className='contact_message w-2/5 max-640:w-full max-920:w-2/3 max-920:text-2xl max-1024:w-2/3 h-32 text-left'>
          <label htmlFor="message">Message:</label>
          <br />
          <textarea
            className="border-black border-2 w-full h-full rounded-md max-920:h-52"
            type="text"
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder='Enter your message'
          />
          {errors.message && <span className="error text-red-600">{errors.message}</span>}
        </div>
        <button type='submit' className='w-1/3 max-920:h-20 max-920:text-3xl max-920:my-36 text-2xl border-black border-2 rounded-md my-10 h-10 bg-purple-900 hover:bg-purple-950'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
