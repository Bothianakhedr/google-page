import PropTypes from "prop-types";

export default function ReuseableBtn({ BtnText }) {
  return (
    <button className="">
      <a href="#">{BtnText}</a>
    </button>
  );
}

ReuseableBtn.propTypes = {
  BtnText: PropTypes.string.isRequired,
};
