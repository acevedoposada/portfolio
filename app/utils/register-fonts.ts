import { Font } from "@react-pdf/renderer";

export function registerFonts() {
  Font.register({
    family: "Poppins",
    fonts: [
      {
        src: "http://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrFJDUc1NECPY.ttf",
        fontWeight: 400,
      },
      {
        src: "http://fonts.gstatic.com/s/poppins/v20/pxiGyp8kv8JHgFVrLPTed3FBGPaTSQ.ttf",
        fontWeight: 100,
      },
      {
        src: "http://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLFj_V1tvFP-KUEg.ttf",
        fontWeight: 200,
      },
      {
        src: "http://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLDz8V1tvFP-KUEg.ttf",
        fontWeight: 300,
      },
      {
        src: "http://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLGT9V1tvFP-KUEg.ttf",
        fontWeight: 500,
      },
      {
        src: "http://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLEj6V1tvFP-KUEg.ttf",
        fontWeight: 600,
      },
      {
        src: "http://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLCz7V1tvFP-KUEg.ttf",
        fontWeight: 700,
      },
      {
        src: "http://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLDD4V1tvFP-KUEg.ttf",
        fontWeight: 800,
      },
      {
        src: "http://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLBT5V1tvFP-KUEg.ttf",
        fontWeight: 900,
      },
    ],
  });

  Font.register({
    family: "Karla",
    fonts: [
      {
        src: "http://fonts.gstatic.com/s/karla/v23/qkBIXvYC6trAT55ZBi1ueQVIjQTD-JqqFENLR7fHGw.ttf",
      },
    ],
  });

  const hyphenationCallback = (word: string) => {
    // Return word parts in an array
    return [word];
  };

  Font.registerHyphenationCallback(hyphenationCallback);
}
