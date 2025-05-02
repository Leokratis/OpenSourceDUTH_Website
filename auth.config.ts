import GitHub from '@auth/core/providers/github';
import { defineConfig } from 'auth-astro';

// List of GitHub usernames allowed to access the admin panel (converted to lowercase for case-insensitive matching)
const AUTHORIZED_ADMINS = [
  'leokratis', // All usernames in lowercase
  'miselve',
  'billisc',
  'vasilikikonou',
  'jimman2003'
];

export default defineConfig({
  providers: [
    GitHub({
      clientId: import.meta.env.GITHUB_CLIENT_ID,
      clientSecret: import.meta.env.GITHUB_CLIENT_SECRET,
      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name || profile.login,
          email: profile.email,
          image: profile.avatar_url,
          // Explicitly add GitHub login to the user object
          login: profile.login,
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // For GitHub, the username is available in the profile object
      const githubUsername = (profile?.login as string || '').toLowerCase();
      console.log('Sign-in attempt from:', githubUsername, 'Authorized:', AUTHORIZED_ADMINS.includes(githubUsername));
      return AUTHORIZED_ADMINS.includes(githubUsername);
    },
    async session({ session, user, token }) {
      // Add isAdmin flag and GitHub username to the session
      if (session?.user) {
        // Store the GitHub username (from token or user object)
        const username = token?.username || user?.login;
        
        // Set the admin status
        session.user.isAdmin = Boolean(
          username && AUTHORIZED_ADMINS.includes(username.toLowerCase())
        );
        
        // Add the username to session
        session.user.username = username;
        
        console.log('Session user:', username, 'isAdmin:', session.user.isAdmin);
      }
      return session;
    },
    async jwt({ token, account, user, profile }) {
      // Only update the token when we have new profile data (at sign-in)
      if (profile) {
        token.username = profile.login;
        token.isAdmin = AUTHORIZED_ADMINS.includes(profile.login.toLowerCase());
        console.log('JWT token updated:', token.username, 'isAdmin:', token.isAdmin);
      } else if (user) {
        // Fallback to user object if available
        token.username = user.login || token.username;
        token.isAdmin = Boolean(token.username && 
          AUTHORIZED_ADMINS.includes(token.username.toLowerCase()));
      }
      return token;
    }
  },
  debug: process.env.NODE_ENV !== 'production',
});