import { fauna } from '../../../services/fauna'
import { query as q } from 'faunadb'

import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"


export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile }) {
      const { email, name, following } = user;
      try {
        await fauna.query(
          q.Create(
            q.Collection('users'),
            {
              data: {
                email: email,
                name: name,
                following: following,
              },
            },
          )
        )
          .then(obj => console.log('User created as :>>', obj))
          .catch(err => console.error(err))

        return true
      } catch {
        return false
      }
    },
  }
})