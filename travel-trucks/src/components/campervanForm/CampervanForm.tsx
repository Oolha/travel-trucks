import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import css from "../CampervanForm/CampervanForm.module.css";
import { campervanFormSchema } from "../../validation/schema";

type CampervanFormProps = {};

const CampervanForm: React.FC<CampervanFormProps> = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [date, setDate] = useState<Date | null>(null);
  const [comment, setComment] = useState<string>("");
  const [messages, setMessages] = useState<{ [key: string]: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessages({});
    const { error } = campervanFormSchema.validate(
      { name, email, date, comment },
      { abortEarly: false }
    );

    if (error) {
      const validationMessages: { [key: string]: string } = {};
      error.details.forEach((err) => {
        validationMessages[err.path[0]] = err.message;
      });
      setMessages(validationMessages);
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
    <div className={css.mainBox}>
      <h3 className={css.title}>Book your campervan now</h3>
      <ToastContainer position="top-right" autoClose={3000} />
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          placeholder="Name*"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={css.input}
        />
        {messages.name && <p className={css.message}>{messages.name}</p>}
        <input
          type="email"
          placeholder="Email*"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={css.input}
        />
        {messages.email && <p className={css.message}>{messages.email}</p>}
        <DatePicker
          selected={date}
          onChange={handleDateChange}
          placeholderText="Booking date*"
          className={css.input}
        />
        {messages.date && <p className={css.message}>{messages.date}</p>}
        <textarea
          placeholder="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className={css.comment}
        />
        {messages.comment && <p className={css.message}>{messages.comment}</p>}
        <div className={css.btnBox}>
          <button type="submit" className={css.btn}>
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default CampervanForm;
