import { ContactPhoneIcon, LocationPinIcon, SendRocketIcon } from "@/svg";
import Image from "next/image";
import Link from "next/link";

interface mapItemDT {
    id: number,
    pinClass: string,
    country: string,
    img: string,
}

interface MapItemProps {
    item: mapItemDT;
    index: number;
    isActive: boolean;
    onHover: (index: number) => void;
};
const MapPinItem = ({ item, index, isActive, onHover }: MapItemProps) => {
    return (
        <div
            className={`tp-map-pin-wrap ${item.pinClass}`}
            onMouseEnter={() => onHover(index)}
        >
            <div className={`tp-map-pin p-relative ${isActive ? "active" : ""}`}>
                <span className="tp-map-pin-icon">
                    <LocationPinIcon />
                </span>

                <div className="tp-map-popup">
                    <div className="tp-map-popup-thumb tp-round-8 mb-20">
                        <Image
                            width={228}
                            height={149}
                            className="tp-round-8 img-fluid"
                            src={item.img}
                            alt="popup"
                        />
                    </div>

                    <div className="tp-map-popup-content">
                        <h6 className="tp-ff-sora fw-600 fs-18 ls-m-4">
                            {item.country}
                        </h6>

                        <Link
                            href="mailto:info@aura.com"
                            className="tp-map-popup-contact mb-5"
                        >
                            <span>
                                <SendRocketIcon />
                            </span>
                            info@Aleric.com
                        </Link>

                        <Link
                            href="tel:+123456789"
                            className="tp-map-popup-contact"
                        >
                            <span>
                                <ContactPhoneIcon />
                            </span>
                            +123456789
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MapPinItem;