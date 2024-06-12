const Heading = ({ text1, text2 }) => {
  return (
    <h3 className="section__entry__title">
      <span>{text1}</span> <br />
      {text2}
    </h3>
  );
};

export default Heading;
