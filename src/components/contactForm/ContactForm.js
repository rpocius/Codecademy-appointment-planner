import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          value={name}
          onChange={setName()}
        />
        <input
          name="phone"
          type="tel"
          value={phone}
          pattern="^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$"
          onChange={setPhone()}
        />
        <input
          name="email"
          type="email"
          value={email}
          onChange={setEmail()}
        />
        <button
          type="submit"
        >Submit
        </button>
      </form>
    </>
  );
};

