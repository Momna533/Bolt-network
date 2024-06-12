import Heading from "./Heading";
import List from "./List";
import Paragraph from "./Paragraph";
import Image from "./Image";

const Section = ({
  img,
  alt,
  text1,
  text2,
  text,
  date,
  day,
  time,
  season,
  genre,
}) => {
  return (
    <section>
      <div className="section__entry">
        <Image img={img} alt={alt} />
      </div>
      <div className="section__entry">
        <Heading text1={text1} text2={text2} />
        <Paragraph text={text} />
      </div>
      <div className="section__entry">
        <List date={date} day={day} time={time} season={season} genre={genre} />
      </div>
    </section>
  );
};

export default Section;
