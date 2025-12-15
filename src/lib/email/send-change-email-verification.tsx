import { Resend } from 'resend';
import { render } from '@react-email/render';
import { VerificationEmail } from './templates/verification-email';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendChangeEmailVerification(newEmail: string, url: string) {
  const html = await render(<VerificationEmail verificationUrl={url} />);

  await resend.emails.send({
    from: 'noreply@flugg.dev',
    to: newEmail,
    subject: 'Bekfeft din nye e-postadresse',
    html,
  });
}
