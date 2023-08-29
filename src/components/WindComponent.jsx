import useScript from "../Hooks/useScript";

function WindComponent() {
  const url =
    "https://es.windfinder.com/widget/forecast/js/tuxpan_veracruz?unit_wave=m&unit_rain=mm&unit_temperature=c&unit_wind=kmh&unit_pressure=hPa&days=4&show_day=1&show_pressure=0&show_clouds=0";

  useScript(url);

  return (
    <>
      {/* <noscript>
        <a
          rel="nofollow"
          href="https://www.windfinder.com/forecast/tuxpan_veracruz?utm_source=forecast&utm_medium=web&utm_campaign=homepageweather&utm_content=noscript-forecast"
        >
          Pronostico de Oleaje y clima de Tuxpan, Veracruz
        </a>{" "}
        provided by{" "}
        <a
          rel="nofollow"
          href="https://www.windfinder.com?utm_source=forecast&utm_medium=web&utm_campaign=homepageweather&utm_content=noscript-logo"
        >
          windfinder.com
        </a>
      </noscript> */}
    </>
  );
}

export default WindComponent;
