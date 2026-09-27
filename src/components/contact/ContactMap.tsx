import React from "react";

const ContactMap = () => {
    return (
        <div className="tp-contact-map p-relative fix">
            <div className="tp-contact-map-box">
                <iframe
                    src="https://www.google.com/maps?q=Haute-Savoie%2C%20France&output=embed"
                    title="ITEC Solutions · Haute-Savoie, France"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};

export default ContactMap;
