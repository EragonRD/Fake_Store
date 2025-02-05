import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!, // ID client Google
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!, // Secret client Google
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      // Ajouter des informations supplémentaires à la session
      session.user.name = token.name;
     // session.user.email = token.email;
      session.user.image = token.picture;
      return session;
    },
    async jwt({ token, user }) {
      // Ajouter des informations supplémentaires au token JWT
      if (user) {
        token.name = user.name;
      //  token.email = user.email;
        token.picture = user.image;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET, // Clé secrète pour signer les tokens
  debug: true, // Activer le mode debug pour le développement
});
