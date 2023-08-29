import landingImage from "../assets/landingImage.jpg";
function WelcomeImage() {
  return (
    <section>
      <div className="w-full">
        <img
          src={landingImage}
          className="w-full relative"
          alt="landingImage"
        />
      </div>
      <div className="absolute top-28 left-0 md:top-52 lg:top-[420px] lg:left-38 bg-[rgba(0,0,0,0.3)] rounded-lg ">
        <h1 className="text-4xl md:text-4xl text-center text-white lg:text-8xl">
          Náutica SerCyn
        </h1>
        <p className="text-white text-xs text-center md:text-xl lg:text-4xl">
          Descubre el Paraíso en cada Ola: Tu Experiencia única hacia La Isla de
          Lobos y los Arrecifes Coralinos.
        </p>
      </div>
    </section>
  );
}

export default WelcomeImage;
