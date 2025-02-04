import googleImage from "../../assets/image/Googlelogo_color_272x92dp.png";

export default function GoogleContent() {
  return (
    <>
      <div className="img text-center my-4 ">
        <img className="" src={googleImage} alt="google" />
      </div>
      <div className="input-info  position-relative">
        <div className="searchIcon position-absolute     ">
          <i className="fa-solid fa-magnifying-glass  fs-6 text-secondary"></i>
        </div>
        <input
          type="text"
          // placeholder="search Google or type a URL"
          className="ps-5 search-input  w-50  rounded-5 p-3 mx-auto border-0 text-secondary d-flex justify-content-between"
        />
        <div className="searchIconsBox d-flex position-absolute">
          <div className="searchByVoice position-relative ">
            <i className=" fa fa-microphone text-secondary"></i>
            <span className="  border-2 position-absolute ">
              search by voice
            </span>
          </div>
          <div className="searchByImage position-relative">
            <i className="fa-regular fa-image ms-3 text-secondary "></i>
            <span className="  border-2 position-absolute ">
              search by image
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
