import { MedicalButtonArrow } from "@/svg";

const appointmentOptions = [
    { id: "tp-remember", label: "Book a Doctor Appointment" },
    { id: "tp-remember2", label: "Request Medical Consultation" },
    { id: "tp-remember3", label: "Inquire About Health Packages" },
    { id: "tp-remember4", label: "Emergency & Urgent Care" },
];
const MedicalFooterForm = () => {
    return (
        <form action="#">
            <input className="tp-input mb-30" type="text" placeholder="Full Name" />
            <input className="tp-input mb-25" type="email" placeholder="Email Address" />
            <h5 className="tp-ff-dm fs-18 fw-400 ls-m-2 tp-footer-md-apoinment-title mb-20">What Are You Looking For?</h5>
            {appointmentOptions.map((opt, i) => (
                <div key={opt.id} className={`tp-remember-input ${i === appointmentOptions.length - 1 ? "mb-25" : "mb-10"}`}>
                    <input type="checkbox" id={opt.id} />
                    <label className="tp-remember" htmlFor={opt.id}>{opt.label}</label>
                </div>
            ))}
            <textarea className="tp-input tp-textarea mb-25" placeholder="Type your message here..."></textarea>
            <button type="submit" className="tp-btn-md tp-bg-theme-1 tp-left-right p-relative hover-text-white d-inline-block tp-text-grey-5 lh-1 fs-16 fw-700 tp-ff-dm">
                <span className="td-text d-inline-block mr-5">Send Message</span>
                <span className="tp-arrow-angle">
                    <MedicalButtonArrow />
                </span>
            </button>
        </form>
    );
};

export default MedicalFooterForm;