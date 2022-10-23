import type ReactPDF from "@react-pdf/renderer";
import { Document, Image, Page, Text, View } from "@react-pdf/renderer";

import { workingSquare } from "~/assets/img/encoded-images";

import { registerFonts } from "~/utils/register-fonts";

registerFonts();

type FontWeight =
  | "thin"
  | "ultralight"
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold"
  | "ultrabold"
  | "black";

interface NTextProps extends ReactPDF.TextProps {
  fontWeight?: FontWeight;
  size?: number;
}

const NText = ({
  style,
  fontWeight = "normal",
  size,
  ...props
}: NTextProps) => {
  const weights: Record<FontWeight, number> = {
    thin: 100,
    ultralight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    ultrabold: 800,
    black: 900,
  };

  const defaultStyles = {
    fontFamily: "Poppins",
    fontWeight: weights[fontWeight],
    fontSize: size,
    lineHeight: 1,
    color: "#3D3D3D",
  };

  const styles = Array.isArray(style)
    ? [defaultStyles, ...style]
    : { ...defaultStyles, ...style };

  return <Text style={styles} {...props} />;
};

export const CurriculumDocument = ({ about, experience }: any) => {
  return (
    <Document>
      <Page
        size="A4"
        style={{
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            width: "100%",
            paddingVertical: 40,
            paddingHorizontal: 25,
          }}
        >
          <View
            style={{
              width: 100,
              height: 100,
              borderRadius: 200,
              overflow: "hidden",
            }}
          >
            <Image src={workingSquare} />
          </View>
          <View style={{ marginLeft: 30 }}>
            <NText fontWeight="bold" size={30}>
              Hi! I'm <Text style={{ color: "#0BA5E9" }}>David Acevedo</Text>,
            </NText>
            <NText
              fontWeight="semibold"
              size={15}
              style={{
                marginTop: 10,
                color: "#444444",
              }}
            >
              I'm a {experience?.[0]?.title} at {experience?.[0]?.company}
            </NText>
            <NText
              size={12}
              style={{
                width: 415,
                textAlign: "left",
                flex: 1,
                fontFamily: "Karla",
                lineHeight: 1.2,
                flexGrow: 1,
                marginTop: 20,
                color: "#707070",
              }}
            >
              {about.description}
            </NText>
          </View>
        </View>
      </Page>
    </Document>
  );
};
