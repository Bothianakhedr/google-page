import PropTypes from "prop-types";

export default function ReuseableSettingLinks({ link }) {
  return <a href="#">{link}</a>;
}

ReuseableSettingLinks.propTypes = {
  link: PropTypes.string.isRequired,
};
