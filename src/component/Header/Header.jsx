import { linksText } from "./Data";
import ReusableLink from "./ReusableLink";

export default function Header() {
  return (
    <div className="  p-3 d-flex align-items-center justify-content-end gap-3 ">
      {linksText.map((text,index) => {
        return <ReusableLink key={index} text={text} />;
      })}
      <div className="google-apps d-flex align-items-center justify-content-center position-relative mt-1">
        <a href="#">
          <i className="fa-solid fa-grip fs-5 text-secondary"></i>
        </a>
        <div className="GoogleApp">Google apps </div>
      </div>
      <div className="google-account rounded-circle d-flex align-items-center justify-content-center position-relative bg-danger ">
        <a className=" text-white" href="#">
          B
        </a>
        <div className="googleAccount"> google account </div>
      </div>
    </div>
  );
}
