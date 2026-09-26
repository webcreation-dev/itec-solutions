"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useIsDarkRoute } from "@/hooks";

const ContactUsForm = () => {
    const isDark = useIsDarkRoute();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [statusMessage, setStatusMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Simple validation
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            toast.error("Please fill in all required fields (*).");
            setStatusMessage("Full name, email, and message are required.");
            return;
        }

        // Simulate Submission
        toast.promise(
            new Promise((resolve) => setTimeout(resolve, 1500)),
            {
                loading: "Sending message...",
                success: () => {
                    setStatusMessage("Thank you! Your message has been sent successfully.");
                    setFormData({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                    });
                    return "Message sent successfully!";
                },
                error: "Failed to send message. Please try again.",
            }
        );
    };

    return (
        <div id="down" className="tp-contact-us-form-ptb pre-header pt-60 pb-120">
            <div className="container container-1750 containers">
                <div className="tp-contact-us-form-wrapper">
                    <div className="row">
                        <div className="col-lg-6">
                           <div className="tp-contact-us-map p-relative">
                              <iframe
                                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193596.26002818075!2d-74.1443121872927!3d40.69728463485858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1745055504744!5m2!1sen!2sbd"
                                  width="600"
                                  height="450"
                                  style={{ border: 0 }}
                                  allowFullScreen={true}
                                  loading="lazy"
                                  referrerPolicy="no-referrer-when-downgrade"
                              ></iframe>
                           </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tp-contact-us-wrap">
                                <h4 className={`tp-contact-us-title mb-55 ${isDark ? "tp-text-common-white" : ""}`}>Send a Message</h4>
                                <form id="contact-form" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="tp-postbox-details-input mb-20">
                                                <label className={`fs-18 tp-ff-p ${isDark ? "tp-text-common-white" : "tp-text-common-black"} mb-10`}>Full name*</label>
                                                <input
                                                    className="tp-input"
                                                    name="name"
                                                    type="text"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="tp-postbox-details-input mb-20">
                                                <label className={`fs-18 tp-ff-p ${isDark ? "tp-text-common-white" : "tp-text-common-black"} mb-10`}>Email address*</label>
                                                <input
                                                    className="tp-input"
                                                    name="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="tp-postbox-details-input mb-20">
                                                <label className={`fs-18 tp-ff-p ${isDark ? "tp-text-common-white" : "tp-text-common-black"} mb-10`}>Subject</label>
                                                <input
                                                    className="tp-input"
                                                    name="subject"
                                                    type="text"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="tp-postbox-details-input mb-20">
                                                <label className={`fs-18 tp-ff-p ${isDark ? "tp-text-common-white" : "tp-text-common-black"} mb-10`}>How Can We Help You*</label>
                                                <textarea
                                                    className="tp-input tp-textarea"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required
                                                ></textarea>
                                            </div>
                                            <div className="tp-contact-form-btn">
                                                <button
                                                    type="submit"
                                                    className={`tp-btn-xl w-100 d-inline-block lh-0 tp-round-26 fs-15 ${
                                                        isDark
                                                            ? "tp-bg-common-white tp-text-common-black hover-text-black"
                                                            : "tp-bg-common-black tp-text-common-white hover-text-white"
                                                    } text-uppercase ls-0 tp-btn-switch-animation tp-ff-heading fw-500`}
                                                >
                                                    <span className="d-flex align-items-center justify-content-center">
                                                        <span className="btn-text">Send Message</span>
                                                        <span className="btn-icon">
                                                            <svg width="25" height="10" viewBox="0 0 25 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M18.675 9.91054L24.72 5.63362C24.806 5.56483 24.8766 5.47086 24.9255 5.36023C24.9744 5.2496 25 5.12579 25 5C25 4.87421 24.9744 4.7504 24.9255 4.63977C24.8766 4.52914 24.806 4.43518 24.72 4.36638L18.675 0.0894619C18.5572 0.0111909 18.4215 -0.0168364 18.2892 0.00979851C18.157 0.0364334 18.0358 0.116215 17.9446 0.236567C17.8535 0.356918 17.7977 0.510993 17.7859 0.674501C17.7742 0.838009 17.8072 1.00165 17.8798 1.13963L19.633 4.26665L0.598757 4.26665C0.439957 4.26665 0.287661 4.34391 0.175371 4.48144C0.0630817 4.61897 0 4.8055 0 5C0 5.1945 0.0630817 5.38103 0.175371 5.51856C0.287661 5.65609 0.439957 5.73335 0.598757 5.73335L19.633 5.73335L17.8798 8.86038C17.8072 8.99835 17.7742 9.16199 17.7859 9.3255C17.7977 9.48901 17.8535 9.64308 17.9446 9.76343C18.0358 9.88378 18.157 9.96357 18.2892 9.9902C18.4215 10.0168 18.5572 9.98881 18.675 9.91054Z" fill="currentColor" />
                                                            </svg>
                                                        </span>
                                                        <span className="btn-icon">
                                                            <svg width="25" height="10" viewBox="0 0 25 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M18.675 9.91054L24.72 5.63362C24.806 5.56483 24.8766 5.47086 24.9255 5.36023C24.9744 5.2496 25 5.12579 25 5C25 4.87421 24.9744 4.7504 24.9255 4.63977C24.8766 4.52914 24.806 4.43518 24.72 4.36638L18.675 0.0894619C18.5572 0.0111909 18.4215 -0.0168364 18.2892 0.00979851C18.157 0.0364334 18.0358 0.116215 17.9446 0.236567C17.8535 0.356918 17.7977 0.510993 17.7859 0.674501C17.7742 0.838009 17.8072 1.00165 17.8798 1.13963L19.633 4.26665L0.598757 4.26665C0.439957 4.26665 0.287661 4.34391 0.175371 4.48144C0.0630817 4.61897 0 4.8055 0 5C0 5.1945 0.0630817 5.38103 0.175371 5.51856C0.287661 5.65609 0.439957 5.73335 0.598757 5.73335L19.633 5.73335L17.8798 8.86038C17.8072 8.99835 17.7742 9.16199 17.7859 9.3255C17.7977 9.48901 17.8535 9.64308 17.9446 9.76343C18.0358 9.88378 18.157 9.96357 18.2892 9.9902C18.4215 10.0168 18.5572 9.98881 18.675 9.91054Z" fill="currentColor" />
                                                            </svg>
                                                        </span>
                                                    </span>
                                                </button>
                                                {statusMessage && <p className="ajax-response mt-20" style={{ display: "block" }}>{statusMessage}</p>}
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsForm;