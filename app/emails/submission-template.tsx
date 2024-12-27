import {
  Html,
  Head,
  Preview,
  Container,
  Section,
  Text,
  Font,
} from "@react-email/components";
import * as React from "react";

interface SubmissionEmailProps {
  name: string;
  email: string;
  phone: string;
  flight: string;
  numberOfPassengers: string;
  flightTime: string;
}

export default function SubmissionEmail({
  name,
  email,
  phone,
  flight,
  numberOfPassengers,
  flightTime,
}: SubmissionEmailProps) {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Arial"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>New VIP Service Request from {name}</Preview>
      <Container style={{ padding: "20px", maxWidth: "600px" }}>
        <Section
          style={{
            backgroundColor: "#f6f6f6",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <Text
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "20px",
              color: "#333",
            }}
          >
            New VIP Service Request
          </Text>

          <Section
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "4px",
            }}
          >
            <Text style={fieldStyle}>
              <strong>Client Name:</strong> {name}
            </Text>
            <Text style={fieldStyle}>
              <strong>Email:</strong> {email}
            </Text>
            <Text style={fieldStyle}>
              <strong>Phone:</strong> {phone}
            </Text>
            <Text style={fieldStyle}>
              <strong>Flight Number:</strong> {flight}
            </Text>
            <Text style={fieldStyle}>
              <strong>Number of Passengers:</strong> {numberOfPassengers}
            </Text>
            <Text style={fieldStyle}>
              <strong>Flight Time:</strong> {flightTime}
            </Text>
          </Section>

          <Text
            style={{
              fontSize: "14px",
              color: "#666",
              marginTop: "20px",
              textAlign: "center",
            }}
          >
            This is an automated message from your VIP Airport Service system.
          </Text>
        </Section>
      </Container>
    </Html>
  );
}

const fieldStyle = {
  fontSize: "16px",
  color: "#333",
  marginBottom: "10px",
  lineHeight: "1.5",
};
