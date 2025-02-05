import { useState } from "react";
import googleImage from "../../assets/image/Googlelogo_color_272x92dp.png";
import { sentences } from "../Buttons/data";
import List from "../List/List";
import Button from "../Buttons/Button";

export default function GoogleContent() {
  const [term, setTerm] = useState("");
  const [filteredSentences, setFilteredSentences] = useState([]);

  function searchWord(e) {
    let inputValue = e.target.value; // input value
    setTerm(inputValue);
    if (inputValue == "") {
      setFilteredSentences([]);
      return;
    }
    let res = sentences.filter((sentence) => {
      return sentence.toLowerCase().includes(inputValue.toLowerCase());
    });
    setFilteredSentences(res);
    console.log(filteredSentences);
  }
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
          value={term}
          onChange={searchWord}
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
      <Button/>
      <List items={filteredSentences} />
    </>
  );
}
