"use client"
import useGlobalContext from "@/hooks/useContext";
import SearchForm from "./SearchForm";
import Image from "next/image";
import Link from "next/link";

const HeaderSearch = () => {
    const { isSearchModalOpen, toggleSearchModal } = useGlobalContext();

    return (
        <>
            <div onClick={toggleSearchModal} className={`tp-search-body-overlay ${isSearchModalOpen ? "active" : ""}`}></div>
            <div className={`tp-search-form-toggle ${isSearchModalOpen ? "active" : ""}`}>
                <div className="container">
                    <div className="row mb-70">
                        <div className="col-lg-12">
                            <div className="tp-search-top d-flex justify-content-between align-items-center">
                                <div className="tp-header-logo tp-search-logo">
                                    <Link href="/">
                                        <Image className="logo-1" width={178} height={89} src="/assets/img/logo/itec-logo.png" alt="ITEC Ingénierie Construction Développement" />
                                        <Image className="logo-2" width={178} height={89} src="/assets/img/logo/itec-logo.png" alt="ITEC Ingénierie Construction Développement" />
                                    </Link>
                                </div>
                                <button onClick={toggleSearchModal} className="tp-search-close">
                                    <i className="fa-light fa-xmark"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="tp-search-form">
                                <SearchForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderSearch;
