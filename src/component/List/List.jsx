import PropTypes from "prop-types"; 

export default function List({ items = [] }) {
  return (
    <ul className="list-unstyled text-center  ">
      {items.length > 0
        ? items.map((item, index) => (
            <li
              className="m-2 w-25 mx-auto border border-1 rounded "
              key={index}
            >
              {item}
            </li>
          ))
        : ""}
    </ul>
  );
}

List.propTypes = {
    items: PropTypes.array.isRequired
}