import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentailsProvider from "next-auth/providers/credentials";
export const options = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),

    CredentailsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "Your UserName",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Your password",
        },
      },
      async authorize(credentials) {
        console.log(credentials);
        ("hit");
        const user = { name: "mavin", password: "ex" };
        return credentials?.username === user.name &&
          credentials.password === user.password
          ? user
          : null;
      },
    }),
  ],
};
