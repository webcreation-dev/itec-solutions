import {
    AmazonIcon,
    BrandSeoWaveBorder,
    DropboxIcon,
    FigmaIcon,
    GoogleNewsIcon,
    MailchimpIcon,
    TwitterIcon,
} from "@/svg";
import Link from "next/link";

const brands = [
    { name: "Google News", Icon: GoogleNewsIcon },
    { name: "Amazon", Icon: AmazonIcon },
    { name: "Twitter", Icon: TwitterIcon },
    { name: "Mailchimp", Icon: MailchimpIcon },
    { name: "Figma", Icon: FigmaIcon },
    { name: "Dropbox", Icon: DropboxIcon },
];

const SeoAgencyTrustedBrand = () => {
    return (
        <section className="al-brand-seo-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-9">
                        <div className="al-brand-seo-wrapper pt-20 pb-50 p-relative">
                            <div className="al-brand-seo-wave-border">
                                <span>
                                    <BrandSeoWaveBorder />
                                </span>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-xl-4 col-lg-4 col-md-5">
                                    <div className="al-brand-seo-title-box">
                                        <span className="al-brand-seo-title">
                                            Trusted by Leading Companies:
                                        </span>
                                    </div>
                                </div>
                                <div className="col-xl-8 col-lg-8 col-md-7">
                                    <div className="al-brand-seo-box">
                                        {brands.map(({ name, Icon }) => (
                                            <Link key={name} href="#" aria-label={name}>
                                                <span>
                                                    <Icon />
                                                </span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SeoAgencyTrustedBrand;