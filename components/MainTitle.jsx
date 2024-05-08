import PropTypes from "prop-types";

const MainTitle = ({ name }) => {
  return (
    <h2 className="mb-12 text-3xl font-semibold tablet:text-4xl desktop:mb-24 desktop:text-5xl">
      {name}
    </h2>
  );
};

MainTitle.propTypes = {
  name: PropTypes.string.isRequired,
};

export default MainTitle;
