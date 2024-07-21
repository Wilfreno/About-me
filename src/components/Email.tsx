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
          <Text>From: {from}</Text>
          <Text>{message}</Text>
        </Body>
      </Tailwind>
    </Html>
  );
}
