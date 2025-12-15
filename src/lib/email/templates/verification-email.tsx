import { Button, Text } from '@react-email/components';
import { BaseEmail } from '../components/base-email';

interface VerificationEmailProps {
  verificationUrl?: string;
}

export function VerificationEmail({
  verificationUrl = 'https://example.com/verify?token=abc123',
}: VerificationEmailProps) {
  return (
    <BaseEmail
      preview="Bekreft din e-postadresse"
      heading="Bekreft din e-postadresse"
      footer="Hvis du ikke opprettet en konto, kan du trygt ignorere denne e-posten."
    >
      <Text className="text-base text-gray-700 leading-relaxed mt-0 mb-6">
        Takk for at du registrerte deg! Vennligst bekreft e-postadressen din ved å klikke på knappen
        nedenfor.
      </Text>
      <Button
        className="bg-blue-600 rounded-lg text-white text-base font-semibold no-underline text-center block py-3 px-5 mb-6"
        href={verificationUrl}
      >
        Bekreft e-postadresse
      </Button>
    </BaseEmail>
  );
}

VerificationEmail.PreviewProps = {
  verificationUrl: 'https://example.com/verify?token=abc123',
} as VerificationEmailProps;

export default VerificationEmail;
