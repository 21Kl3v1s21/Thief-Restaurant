"use client";
import React, { useState } from "react";
import "./booking.css";
import SectionTitle from "../components/SectionTitle";
import { submitBooking } from "../actions/booking";

export default function Booking() {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    people: "",
    message: "",
  };

  const [text, setText] = useState(initialState);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleTextChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setText((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSubmitBooking = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!text.name || !text.email || !text.date || !text.time || !text.people) {
      setError("Please fill in all required fields.");
      return;
    }

    try {
      await submitBooking({
        name: text.name,
        email: text.email,
        phone: text.phone,
        date: text.date,
        time: text.time,
        people: Number(text.people),
        message: text.message,
      });

      setSuccess(true);
      setText(initialState);
      setTimeout(() => setSuccess(false), 5000);
    } catch {
      setError("Failed to submit booking. Please try again.");
    }
  };

  return (
    <section id="book-a-table" className="book-a-table">
      <div className="container" data-aos="fade-up">
        <SectionTitle title="Reservation" subtitle="Book a Table" />

        <form
          onSubmit={handleSubmitBooking}
          className="booking-form"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="row">
            <div className="col-lg-4 col-md-6 form-group">
              <input
                type="text"
                name="name"
                value={text.name}
                className="form-control"
                placeholder="Your Name"
                onChange={handleTextChange}
              />
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
              <input
                type="email"
                name="email"
                value={text.email}
                className="form-control"
                placeholder="Your Email"
                onChange={handleTextChange}
              />
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
              <input
                type="text"
                name="phone"
                value={text.phone}
                className="form-control"
                placeholder="Phone Number"
                onChange={handleTextChange}
              />
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-2">
              <input
                type="date"
                name="date"
                value={text.date}
                className="form-control"
                onChange={handleTextChange}
              />
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-2">
              <input
                type="time"
                name="time"
                value={text.time}
                className="form-control"
                onChange={handleTextChange}
              />
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-2">
              <input
                type="number"
                name="people"
                value={text.people}
                className="form-control"
                placeholder="Number of People"
                onChange={handleTextChange}
              />
            </div>
            <div className="form-group mt-3">
              <textarea
                name="message"
                value={text.message}
                className="form-control"
                placeholder="Message (optional)"
                onChange={handleTextChange}
              />
            </div>
          </div>

          {/* Feedback messages */}
          {error && (
            <div className="error-message text-center mt-3">{error}</div>
          )}
          {success && (
            <div className="sent-message text-center mt-3">
              Booking submitted successfully! 🎉
            </div>
          )}

          <div className="text-center mt-3">
            <button type="submit">Book a Table</button>
          </div>
        </form>
      </div>
    </section>
  );
}
