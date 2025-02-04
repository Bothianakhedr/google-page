import { footerLinks, footerSetting } from "./FooterData";
import ReuseableFooterLinks from "./ReuseableFooterLinks";
import ReuseableSettingLinks from "./ReuseableSettingLinks";

export default function Footer() {
  return (
    <div className="footer">
      <div className="country">Egypt</div>
      <div className="d-flex align-items-center justify-content-between">
        <div className="links footerLinks ">
          {footerLinks.map((link, index) => {
            return <ReuseableFooterLinks key={index} link={link} />;
          })}
        </div>
        <div className="links footerSetting">
          {footerSetting.map((link, index) => {
            return <ReuseableSettingLinks key={index} link={link} />;
          })}
        </div>
      </div>
    </div>
  );
}
