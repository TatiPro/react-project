import {
  Document,
  Image,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
import { FC } from "react";
import { IMyForm } from "./Form";
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    gap: "15px",
    backgroundColor: "white",
  },
  section: {
    flexDirection: "column",
    margin: 15,
    padding: 15,
    flexGrow: 1,
  },
});
//модуль 1
export const PdfDocument: FC<IMyForm> = ({ email, text, title, image }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.section}>
          <Text>email: {email}</Text>
        </View>
        <View style={styles.section}>
          <Text>text: {text}</Text>
        </View>
        <View style={styles.section}>
          <Text>title: {title}</Text>
        </View>
        <View style={styles.section}>
          {image && <Image source={image[0]} />}
        </View>
      </Page>
    </Document>
  );
};
