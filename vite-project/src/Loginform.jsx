import React, { useState } from "react";

 function LargeFormPage() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-4xl p-8 rounded-2xl shadow-lg"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">User Registration Form</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="firstName" onChange={handleChange} placeholder="First Name" className="input" />
          <input name="lastName" onChange={handleChange} placeholder="Last Name" className="input" />
          <input name="email" onChange={handleChange} placeholder="Email" className="input" />
          <input name="phone" onChange={handleChange} placeholder="Phone Number" className="input" />
          <input name="age" onChange={handleChange} placeholder="Age" className="input" />
          <input name="gender" onChange={handleChange} placeholder="Gender" className="input" />
          <input name="address" onChange={handleChange} placeholder="Address" className="input" />
          <input name="city" onChange={handleChange} placeholder="City" className="input" />
          <input name="state" onChange={handleChange} placeholder="State" className="input" />
          <input name="country" onChange={handleChange} placeholder="Country" className="input" />
          <input name="pincode" onChange={handleChange} placeholder="Pincode" className="input" />
          <input name="qualification" onChange={handleChange} placeholder="Qualification" className="input" />
          <input name="college" onChange={handleChange} placeholder="College Name" className="input" />
          <input name="experience" onChange={handleChange} placeholder="Experience (years)" className="input" />
          <input name="skills" onChange={handleChange} placeholder="Skills" className="input" />
          <input name="company" onChange={handleChange} placeholder="Current Company" className="input" />
          <input name="salary" onChange={handleChange} placeholder="Expected Salary" className="input" />
          <input name="linkedin" onChange={handleChange} placeholder="LinkedIn Profile" className="input" />
          <input name="github" onChange={handleChange} placeholder="GitHub Profile" className="input" />
          <input name="portfolio" onChange={handleChange} placeholder="Portfolio URL" className="input" />
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700"
        >
          Submit
        </button>
      </form>

      <style jsx>{`
        .input {
          border: 1px solid #d1d5db;
          padding: 0.75rem;
          border-radius: 0.75rem;
          outline: none;
        }
        .input:focus {
          border-color: #2563eb;
        }
      `}</style>
    </div>
  );
}
export default Loginform