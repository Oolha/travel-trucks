import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type CampervanFormProps = {};

const CampervanForm: React.FC<CampervanFormProps> = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [date, setDate] = useState<Date | null>(null);
  const [comment, setComment] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !date) {
      toast.error("Please fill out all required fields!");
      return;
    }

    toast.success("Booking successful!");
    setName("");
    setEmail("");
    setDate(null);
    setComment("");
  };
  const handleDateChange = (selectedDate: Date | null) => {
    setDate(selectedDate);
  };
  return (
    <div className="mainBox">
      <h3 className="title">Book your campervan now</h3>
      <p className="text">Stay connected! We are always ready to help you.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name*"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email*"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <DatePicker
          selected={date}
          onChange={handleDateChange}
          placeholderText="Booking date*"
          className="custom-datepicker"
        />
        <textarea
          placeholder="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default CampervanForm;
