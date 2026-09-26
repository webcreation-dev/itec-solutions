"use client";

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface ContactFormValues {
    name: string;
    email: string;
    phone: string;
    company: string;
    message: string;
}

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormValues>();

    const onSubmit = (data: ContactFormValues) => {
        console.log(data);

        toast.success("Message sent successfully!");
        reset();
    };

    const onError = () => {
        toast.error("Please fill all required fields correctly.");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit, onError)}>
            <div className="row gx-12">

                {/* Name */}
                <div className="col-md-6">
                    <div className="tp-contact-form-input mb-20">
                        <label>Your name *</label>
                        <input
                            type="text"
                            placeholder="Click son"
                            {...register("name", {
                                required: "Name is required",
                                minLength: {
                                    value: 3,
                                    message: "Name must be at least 3 characters",
                                },
                            })}
                        />
                        {errors.name && <p className="error-text">{errors.name.message}</p>}
                    </div>
                </div>

                {/* Email */}
                <div className="col-md-6">
                    <div className="tp-contact-form-input mb-20">
                        <label>Email Address *</label>
                        <input
                            type="email"
                            placeholder="clikson@gmail.com"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Enter a valid email address",
                                },
                            })}
                        />
                        {errors.email && <p className="error-text">{errors.email.message}</p>}
                    </div>
                </div>

                {/* Phone */}
                <div className="col-md-6">
                    <div className="tp-contact-form-input mb-20">
                        <label>Phone number *</label>
                        <input
                            type="text"
                            placeholder="+225 636 956"
                            {...register("phone", {
                                required: "Phone number is required",
                                pattern: {
                                    value: /^[0-9+\-\s()]+$/,
                                    message: "Enter a valid phone number",
                                },
                            })}
                        />
                        {errors.phone && <p className="error-text">{errors.phone.message}</p>}
                    </div>
                </div>

                {/* Company */}
                <div className="col-md-6">
                    <div className="tp-contact-form-input mb-20">
                        <label>Company name</label>
                        <input
                            type="text"
                            placeholder="Aleric"
                            {...register("company")}
                        />
                    </div>
                </div>

                {/* Message */}
                <div className="col-md-12">
                    <div className="tp-contact-form-input mb-20">
                        <label>Your message *</label>
                        <textarea
                            placeholder="Type here ..."
                            {...register("message", {
                                required: "Message is required",
                                minLength: {
                                    value: 10,
                                    message: "Message must be at least 10 characters",
                                },
                            })}
                        />
                        {errors.message && (
                            <p className="error-text">{errors.message.message}</p>
                        )}
                    </div>

                    <div className="tp-contact-form-btn">
                        <button className="cst-btn rounded-5" type="submit">
                            <span>
                                <span className="text-1">
                                    Schedule a free consultation
                                </span>
                                <span className="text-2">
                                    Schedule a free consultation
                                </span>
                            </span>
                        </button>
                        <p className="ajax-response mt-5"></p>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;