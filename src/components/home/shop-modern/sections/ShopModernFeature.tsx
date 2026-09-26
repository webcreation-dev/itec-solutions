import {
  DeliveryTruckIcon,
  MemberDiscountIcon,
  ReturnRefundIcon,
  SupportHeadsetIcon,
} from "@/svg";

const features = [
  {
    id: 1,
    Icon: DeliveryTruckIcon,
    title: "Free Delivery",
    desc: "Orders from all items",
  },
  {
    id: 2,
    Icon: ReturnRefundIcon,
    title: "Return & Refund",
    desc: "Money back guarantee",
  },
  {
    id: 3,
    Icon: MemberDiscountIcon,
    title: "Member Discount",
    desc: "On every order over $140.00",
  },
  {
    id: 4,
    Icon: SupportHeadsetIcon,
    title: "Support 24/7",
    desc: "Contact us 24 hours a day",
  },
];

const ShopModernFeature = () => {
  return (
    <div className="al-feature-shop-area al-feature-shop-border-2 pb-80">
      <div className="container">
        <div className="al-feature-shop-inner-2">
          <div className="row align-items-center">
            {features.map(({ id, Icon, title, desc }) => (
              <div
                key={id}
                className="col-xl-3 col-lg-3 col-md-6 col-sm-6"
              >
                <div className="al-feature-shop-item-2 d-flex align-items-start">
                  <div className="al-feature-shop-icon-2 mr-10">
                    <span>
                      <Icon />
                    </span>
                  </div>
                  <div className="al-feature-shop-content-2">
                    <h3 className="al-feature-shop-title-2">{title}</h3>
                    <p>{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopModernFeature;