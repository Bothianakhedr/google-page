import PropTypes from "prop-types";

export default function ReusableLink({ text }) {
  return (
    <div className="link">
      <a href="#">{text}</a>
    </div>
  );
}

ReusableLink.propTypes = {
  text: PropTypes.string.isRequired,
};
