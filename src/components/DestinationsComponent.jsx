import islaLobos from "../assets/islaLobos.webp";
import arrecife from "../assets/arrecife.webp";

function DestinationsComponent() {
  return (
    <section className="mt-4 container mx-auto shadow-md p-8 ">
      <h1 className="text-center text-2xl md:text-4xl underline mb-4">
        Destinos
      </h1>
      <article
        className={` bg-gradient-to-b from-oceanBlue via-white to-white rounded-lg shadow-md shadow-blue-200 p-3 lg:flex lg:gap-3`}
      >
        <div className="md:flex md:justify-center lg:w-3/4 mt-6">
          <img
            src={islaLobos}
            alt="isla de lobos"
            className="md:w-2/3 lg:w-auto rounded-lg"
          />
        </div>
        <div className="lg:w-2/3 lg:mx-8">
          <h2 className="text-center text-2xl mb-2 font-bold mt-4">
            Isla de Lobos
          </h2>
          <p>
            Explora la magia de la Isla de Lobos: Un paraíso Náutico
            esperandote.
          </p>
          <br />
          <p>
            Un rincón del mundo donde el mar y la tierra se funden en una
            sinfonía de belleza natural. Nuestros recorridos náuticos te invitan
            a adrentarte en las aguas cristalinasn que rodean esta isla
            paradisiaca y a descubrir cada uno de sus secretos bien guardados.
          </p>
          <br />
          <p>
            Sumérgete en la maravilla de los arrecífes de coral que albergan la
            biodiversidad asombrosa. Ya sea que te sumerjas en sus aguas para
            explorar la vida marina en su esplendor o que prefieras la vista
            desde la cubierta de nuestro barco, cada momento en La Isla de Lobos
            es una experiencia inolvidable.
          </p>
        </div>
      </article>
      <article
        className={`rounded-lg mt-5 bg-gradient-to-b from-white via-white to-oceanBlue shadow-md shadow-blue-400 p-3 lg:flex lg:gap-3 lg:flex-row-reverse`}
      >
        <div className="md:flex md:justify-center lg:w-3/4 mt-6">
          <img
            src={arrecife}
            alt="arrecife"
            className="md:w-2/3 lg:w-auto rounded-lg"
          />
        </div>
        <div className="lg:w-2/3 lg:mx-8">
          <h2 className="text-center text-2xl font-bold mb-2 mt-4">
            Arrecifes Coralinos
          </h2>
          <p>
            Conoce las maravillas de los Arrecifes Coralinos: un encuentro
            inolvidable con la vida Marina.
          </p>
          <br />
          <p>
            Este es el lugar donde la biodiversidad cobra vida en un espectáculo
            deslumbrante de colores y formas. Nuestros recorridos náuticos te
            brindan la oportunidad de sumergirte en este paraíso submarino y
            explorar la riqueza de la vida marina que la alberga.
          </p>
          <br />
          <p>
            Navega por aguas cristalinas hasta llegar a las aguas que rodean los
            Arrecífes Coralinos, donde te aguarda un espectáculo visual sin
            igual. Descubre la danza elegante de los corales, los cardúmenes de
            peces de colores y las criaturas marinas únicas que habitan este
            ecosisitema diverso.
          </p>
        </div>
      </article>
    </section>
  );
}

export default DestinationsComponent;
