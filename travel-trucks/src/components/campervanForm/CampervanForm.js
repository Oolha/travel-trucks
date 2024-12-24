import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import css from "../CampervanForm/CampervanForm.module.css";
import { campervanFormSchema } from "../../validation/schema";
const CampervanForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState(null);
    const [comment, setComment] = useState("");
    const [messages, setMessages] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessages({});
        const { error } = campervanFormSchema.validate({ name, email, date, comment }, { abortEarly: false });
        if (error) {
            const validationMessages = {};
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
    const handleDateChange = (selectedDate) => {
        setDate(selectedDate);
    };
    return (_jsxs("div", { className: css.mainBox, children: [_jsx("h3", { className: css.title, children: "Book your campervan now" }), _jsx(ToastContainer, { position: "top-right", autoClose: 3000 }), _jsx("p", { className: css.text, children: "Stay connected! We are always ready to help you." }), _jsxs("form", { onSubmit: handleSubmit, className: css.form, children: [_jsx("input", { type: "text", placeholder: "Name*", value: name, onChange: (e) => setName(e.target.value), className: css.input }), messages.name && _jsx("p", { className: css.message, children: messages.name }), _jsx("input", { type: "email", placeholder: "Email*", value: email, onChange: (e) => setEmail(e.target.value), className: css.input }), messages.email && _jsx("p", { className: css.message, children: messages.email }), _jsx(DatePicker, { selected: date, onChange: handleDateChange, placeholderText: "Booking date*", className: css.input }), messages.date && _jsx("p", { className: css.message, children: messages.date }), _jsx("textarea", { placeholder: "Comment", value: comment, onChange: (e) => setComment(e.target.value), className: css.comment }), messages.comment && _jsx("p", { className: css.message, children: messages.comment }), _jsx("div", { className: css.btnBox, children: _jsx("button", { type: "submit", className: css.btn, children: "Send" }) })] })] }));
};
export default CampervanForm;
