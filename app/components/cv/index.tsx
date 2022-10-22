import { Document, Page, Text } from "@react-pdf/renderer";

export const CurriculumDocument = () => {
  return (
    <Document>
      <Page size="A4">
        <Text>Curriculum Vitae</Text>
      </Page>
    </Document>
  )
};
