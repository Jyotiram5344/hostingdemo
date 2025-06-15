import React, { useState } from 'react';
import axios from 'axios';

function UserForm() {
  const [form, setForm] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://<your-backend-url>/api/users', form);
      alert('Data submitted');
      setForm({ name: '', email: '' });
    } catch (err) {
      console.error(err);
      alert('Submission failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm;
