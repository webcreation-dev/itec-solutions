"use client";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { ArrowIcon } from "@/svg";

type FormData = {
    website: string;
    email: string;
    agree: boolean;
};

const SeoAnalysisForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>();

    const onSubmit = () => {
        toast.success("Analysis request sent successfully!");
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="al-faq-input-box">
                {/* Website URL */}
                <div className="al-faq-input mb-20">
                    <input
                        type="text"
                        placeholder="Your website url"
                        {...register("website", {
                            required: "Website URL is required",
                            pattern: {
                                value: /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/[\w-]*)*\/?$/,
                                message: "Enter a valid URL",
                            },
                        })}
                    />
                    {errors.website && (
                        <p className="error-text">{errors.website.message}</p>
                    )}
                </div>

                {/* Email */}
                <div className="al-faq-input mb-20">
                    <input
                        type="text"
                        placeholder="Your email address"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Enter a valid email",
                            },
                        })}
                    />
                    {errors.email && (
                        <p className="error-text">{errors.email.message}</p>
                    )}
                </div>

                {/* Checkbox */}
                <div className="al-faq-remeber mb-20">
                    <input
                        id="agree"
                        type="checkbox"
                        {...register("agree", { required: "You must agree to proceed" })}
                    />
                    <label htmlFor="agree">I agree to receive marketing materials.</label>
                    {errors.agree && (
                        <p className="error-text">{errors.agree.message}</p>
                    )}
                </div>

                {/* Submit Button */}
                <div className="al-faq-btn mb-20">
                    <button
                        type="submit"
                        className="tp-btn-cst w-100 text-center d-inline-block lh-1 tp-round-26 fs-16 tp-bg-common-blue hover-text-white ls-0 tp-btn-switch-2-animation tp-text-common-white fw-600 tp-ff-inter"
                    >
                        <span className="d-flex align-items-center justify-content-center">
                            <span className="btn-text">Send Analysis</span>
                            <span className="btn-icon">
                                <ArrowIcon />
                            </span>
                            <span className="btn-icon">
                                <ArrowIcon />
                            </span>
                        </span>
                    </button>
                </div>
            </div>
        </form>
    );
};

export default SeoAnalysisForm;