import PropTypes from "prop-types";

export default function ReuseableFooterLinks({ link }) {
  return <a href="#">{link}</a>;
}

ReuseableFooterLinks.propTypes = {
  link: PropTypes.string.isRequired,
};
