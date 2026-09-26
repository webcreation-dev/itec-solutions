"use client";
import { useIsDarkRoute } from "@/hooks";
import MapPinItem from "../components/MapPinItem";
import { useState } from "react";

const locations = [
    {
        id: 1,
        pinClass: "tp-map-pin-1",
        country: "Ireland",
        img: "/assets/img/location/thumb.jpg",
    },
    {
        id: 2,
        pinClass: "tp-map-pin-2",
        country: "(USA)",
        img: "/assets/img/location/thumb-2.jpg",
    },
    {
        id: 3,
        pinClass: "tp-map-pin-3",
        country: "Canada",
        img: "/assets/img/location/thumb-3.jpg",
    },
    {
        id: 4,
        pinClass: "tp-map-pin-4",
        country: "Australia",
        img: "/assets/img/location/thumb-4.jpg",
    },
    {
        id: 5,
        pinClass: "tp-map-pin-5",
        country: "(UK)",
        img: "/assets/img/location/thumb-5.jpg",
    },
    {
        id: 6,
        pinClass: "tp-map-pin-6",
        country: "Germany",
        img: "/assets/img/location/thumb-6.jpg",
    },
    {
        id: 7,
        pinClass: "tp-map-pin-7",
        country: "Saudi Arabia",
        img: "/assets/img/location/thumb-7.jpg",
    },
    {
        id: 8,
        pinClass: "tp-map-pin-8",
        country: "Qatar",
        img: "/assets/img/location/thumb-8.jpg",
    },
    {
        id: 9,
        pinClass: "tp-map-pin-9",
        country: "Kuwait",
        img: "/assets/img/location/thumb-5.jpg",
    },
    {
        id: 10,
        pinClass: "tp-map-pin-10",
        country: "Oman",
        img: "/assets/img/location/thumb-7.jpg",
    },
    {
        id: 11,
        pinClass: "tp-map-pin-11",
        country: "Bahrain",
        img: "/assets/img/location/thumb-3.jpg",
    },
    {
        id: 12,
        pinClass: "tp-map-pin-12",
        country: "Singapore",
        img: "/assets/img/location/thumb-6.jpg",
    },
    {
        id: 13,
        pinClass: "tp-map-pin-13",
        country: "New Zealand",
        img: "/assets/img/location/thumb-8.jpg",
    },
];

const PlumbingServiceMapArea = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const isDarkTheme = useIsDarkRoute();
    const mapImage = isDarkTheme ? "/assets/img/location/map-black.png" : "/assets/img/location/map.png";

    return (
        <div className="tp-map-pb-spacing pt-160">
            <div className="tp-map-pb-wrap bg-position"
                style={{ backgroundImage: `url(${mapImage})` }}>
                <div className="container-fluid container-1646">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tp-map-pb-location p-relative">
                                {locations.map((item, index) => (
                                    <MapPinItem
                                        key={item.id}
                                        item={item}
                                        index={index}
                                        isActive={activeIndex === index}
                                        onHover={setActiveIndex}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlumbingServiceMapArea;