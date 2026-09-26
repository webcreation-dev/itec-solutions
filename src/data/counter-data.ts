import { CountryIcon, CustomerIcon, ExperienceIcon, ProjectIcon, PropertyApartment, PropertyArea, PropertyFloor, PropertyParking } from "@/svg";

export const counterData = [
    {
        Icon: ProjectIcon,
        end: 34,
        suffix: "K",
        title: "Project Completed",
        alignClass: "",
        border: true,
    },
    {
        Icon: CountryIcon,
        end: 16,
        suffix: "K",
        title: "Country Office",
        alignClass: "justify-content-center",
        border: true,
    },
    {
        Icon: ExperienceIcon,
        end: 12,
        suffix: "+",
        title: "Year of Experience",
        alignClass: "justify-content-center",
        border: true,
    },
    {
        Icon: CustomerIcon,
        end: 98,
        suffix: "%",
        title: "Happy Customer",
        alignClass: "justify-content-end",
        border: false,
    },
];
//construction counter data
export const propertyStats = [
    {
        value: 54,
        label: "Floor",
        duration: 1,
        Icon: PropertyFloor,
    },
    {
        value: 562,
        label: "Luxury apartments",
        duration: 2,
        Icon: PropertyApartment,
    },
    {
        value: 920,
        label: "Parking",
        duration: 3,
        Icon: PropertyParking,
    },
    {
        value: 2220,
        label: "Construction area",
        duration: 4,
        Icon: PropertyArea,
    },
];