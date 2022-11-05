import type ReactPDF from "@react-pdf/renderer";
import { Document, Image, Link, Page, Text, View } from "@react-pdf/renderer";
import dayjs from "dayjs";

import {
  documentGlassIcon,
  githubIcon,
  instagramIcon,
  linkedinIcon,
  workingSquare,
} from "~/assets/img/encoded-images";

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
  size = 15,
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
          <View>
            <View style={{ position: "relative", height: 100, width: 100 }}>
              <View
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 200,
                  overflow: "hidden",
                  zIndex: 2,
                  position: "absolute",
                }}
              >
                <Image src={workingSquare} />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginVertical: 10,
              }}
            >
              <Link src="https://github.com/acevedoposada">
                <Image src={githubIcon} style={{ width: 12, height: 12 }} />
              </Link>
              <Link
                src="https://www.linkedin.com/in/cristian-david-acevedo-posada/"
                style={{ marginHorizontal: 8 }}
              >
                <Image src={linkedinIcon} style={{ width: 12, height: 12 }} />
              </Link>
              <Link src="https://www.instagram.com/davidchacevedo_/">
                <Image src={instagramIcon} style={{ width: 12, height: 12 }} />
              </Link>
            </View>
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
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 20,
            width: "100%",
            paddingHorizontal: 20,
          }}
        >
          <Image
            src={documentGlassIcon}
            style={{ width: 20, minWidth: 20, marginRight: 10 }}
          />
          <NText fontWeight="semibold">Employment History</NText>
        </View>
        <View
          style={{
            alignContent: "flex-start",
            width: "100%",
            paddingHorizontal: 35,
          }}
        >
          {experience.map((exp: any, idx: number) => (
            <View key={idx} style={{ flexDirection: "row", marginBottom: 20 }}>
              <View style={{ width: 170, paddingTop: 4, paddingLeft: 20 }}>
                <NText size={8}>
                  {dayjs(exp.startDate._seconds * 1000).format("MMM YYYY")} -{" "}
                  {exp.dueDate
                    ? dayjs(exp.dueDate._seconds * 1000).format("MMM YYYY")
                    : "Present"}
                </NText>
              </View>
              <View style={{ width: "100%" }}>
                <NText
                  size={12}
                  fontWeight="semibold"
                  style={{ color: "#0BA5E9" }}
                >
                  {exp.title}
                </NText>
                <NText size={10} fontWeight="medium" style={{ marginTop: 3 }}>
                  {exp.company}
                </NText>
                {Array.isArray(exp.description) ? (
                  <View style={{ marginTop: 7 }}>
                    {exp.description.map((item: string, idx: number) => (
                      <View key={idx} style={{ flexDirection: "row" }}>
                        <View
                          style={{
                            width: 2,
                            height: 2,
                            backgroundColor: "#6b6b6b",
                            borderRadius: 3,
                            marginTop: 4.5,
                            marginRight: 5,
                          }}
                        />
                        <View>
                          <NText
                            size={8}
                            style={{ color: "#6b6b6b", lineHeight: 1.6 }}
                          >
                            {item}
                          </NText>
                        </View>
                      </View>
                    ))}
                  </View>
                ) : (
                  <NText
                    size={8}
                    style={{ color: "#6b6b6b", marginTop: 5, lineHeight: 1.5 }}
                  >
                    {exp.description}
                  </NText>
                )}
              </View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};
