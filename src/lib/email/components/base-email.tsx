import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
} from '@react-email/components';
import { ReactNode } from 'react';

interface BaseEmailProps {
  preview: string;
  heading: string;
  children: ReactNode;
  footer?: string;
}

export function BaseEmail({ preview, heading, children, footer }: BaseEmailProps) {
  return (
    <Tailwind>
      <Html>
        <Head />
        <Preview>{preview}</Preview>
        <Body className="bg-gray-100 font-sans">
          <Container className="mx-auto my-0 pt-5 pb-12">
            <Container className="bg-white rounded-lg shadow-sm max-w-[600px] mx-auto my-0 p-0">
              <Section className="px-10 pt-10">
                <Text className="text-3xl font-bold text-gray-900 m-0 mb-6">{heading}</Text>
              </Section>
              <Section className="px-10">{children}</Section>
              {footer && (
                <Section className="px-10 pb-10">
                  <Text className="text-sm text-gray-500 leading-6 m-0">{footer}</Text>
                </Section>
              )}
            </Container>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
}
