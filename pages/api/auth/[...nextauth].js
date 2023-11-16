import NextAuth from 'next-auth/next';
import CredentialsProviders from 'next-auth/providers/credentials';

export default NextAuth({
  secret: process.env.AUTH_SECRET,
  providers: [
    CredentialsProviders({
      name: 'credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        if (credentials.username !== 'a' || credentials.password !== 'b') {
          var user = null;
        } else {
          var user = { id: '1', name: 'Nikhil', email: 'nikhil@gmail.com' };
        }

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
});
