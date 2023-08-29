import { useEffect } from "react";

export default function useScript(url) {
  useEffect(() => {
    const paintScript = async () => {
      if (!document.querySelector(`script[src="${url}"]`)) {
        const script = document.createElement("script");
        script.src = url;
        script.async = true;
        document.body.appendChild(script);
      }
    };

    paintScript();

    return () => {};
  }, [url]);
}
