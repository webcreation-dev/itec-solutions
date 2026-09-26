"use client";

import { HeaderSearchFormValues } from "@/types/forms-d";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-hot-toast";

const SearchForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<HeaderSearchFormValues>();

    const onSubmit: SubmitHandler<HeaderSearchFormValues> = (data) => {
        // Example: show toast when submitted
        toast.success(`Searching for: "${data.search}"`);
        reset(); // Clear input after submit
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="tp-search-form-input">
                <input
                    type="text"
                    placeholder="What are you looking for?"
                    {...register("search", { required: "Please enter a search term" })}
                    className={errors.search ? "input-error" : ""}
                />
                <span className="tp-search-focus-border"></span>
                <button className="tp-search-form-icon" type="submit">
                    <i className="fa-sharp fa-regular fa-magnifying-glass"></i>
                </button>
            </div>

            {/* Error message */}
            {errors.search && (
                <p className="error-text">{errors.search.message}</p>
            )}
        </form>
    );
};

export default SearchForm;