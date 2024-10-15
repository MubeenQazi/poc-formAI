// components/GeneratedReportPDF.tsx
import { Page, Text, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles for the PDF
const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  heading: {
    fontSize: 18,
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
});

interface GeneratedReportPDFProps {
  report: string;
}

const GeneratedReportPDF = ({ report }: GeneratedReportPDFProps) => (
  <Document>
    <Page style={styles.page}>
      <Text style={styles.heading}>Generated Report</Text>
      <Text style={styles.text}>{report}</Text>
    </Page>
  </Document>
);

export default GeneratedReportPDF;
