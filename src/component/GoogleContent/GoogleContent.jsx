import googleImage from "../../assets/image/Googlelogo_color_272x92dp.png";

export default function GoogleContent() {
  return (
    <>
      <div className="img text-center my-1 ">
        <img className="" src={googleImage} alt="google" />
      </div>
      <div className="input-info position-relative">
        <div className="searchIcon position-absolute ">
          <i className="fa-solid fa-magnifying-glass    "></i>
        </div>
        <input
          type="text"
          // placeholder="search Google or type a URL"
          className="ps-5 search-input   rounded-5 p-3 mx-auto border-0  d-flex justify-content-between"
        />
        <div className="searchIconsBox d-flex position-absolute">
          <div className="searchByVoice position-relative ">
            <i className=" fa fa-microphone  "></i>
            <span className="  border-2 position-absolute ">
              search by voice
            </span>
          </div>
          <div className="searchByImage position-relative">
            <i className="fa-regular fa-image ms-3  "></i>
            <span className="  border-2 position-absolute ">
              search by image
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
