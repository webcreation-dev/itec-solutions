"use client";
import UncoverSlice from "@/components/ui/UncoverSlice";

type Props = {
  image?: string;
  speed?: number | string;
};

const BannerThumb = ({
  image = "/assets/img/banner/pb/bg.jpg",
  speed = 0.8,
}: Props) => {
  return (
    <div className="tp-banner-pb-thumb section-triger">
      <div className="box h-100">
        <img
          data-speed={speed}
          className="img-cover myimg"
          src={image}
          alt="banner"
        />

        <div className="uncover">
          <UncoverSlice />
          <UncoverSlice />
          <UncoverSlice />
        </div>
      </div>
    </div>
  );
};

export default BannerThumb;