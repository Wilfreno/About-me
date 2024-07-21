import {
  Body,
  Button,
  Html,
  Img,
  Heading,
  Section,
  Text,
  Container,
  Head,
  Hr,
  Link,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

export default function Email({
  from,
  message,
}: {
  from: string;
  message: string;
}) {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-white">
          <Container className="border border-gray-200 border-solid rounded shadow-md w-full font-sans font-medium space-y-10">
            <Text>From: {from}</Text>
            <Text>{message}</Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
