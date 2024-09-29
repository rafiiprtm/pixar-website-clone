interface TextProp {
  text: string;
}

const Hero = ({ text }: TextProp) => {
  return (
    <>
      <div className="bg-img">
        <h1 className="bg-text">{text}</h1>
      </div>
    </>
  );
};

export default Hero;
