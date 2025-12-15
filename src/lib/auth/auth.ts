import { betterAuth } from 'better-auth/minimal';
import { nextCookies } from 'better-auth/next-js';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { sendChangeEmailVerification } from '@/lib/email/send-change-email-verification';
import { db } from '@/lib/database/db';
import * as schema from '@/lib/database/schemas';

export const auth = betterAuth({
  appName: 'Wedding',
  database: drizzleAdapter(db, {
    provider: 'pg',
    schema,
  }),
  emailVerification: {
    sendOnSignUp: false,
    sendVerificationEmail: async ({ user, url }) =>
      await sendChangeEmailVerification(user.email, url),
  },
  user: {
    changeEmail: {
      enabled: true,
    },
  },
  plugins: [nextCookies()],
});

export type Session = typeof auth.$Infer.Session;
export type User = Session['user'];
