
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import { AuthOptions } from "next-auth";
import clientPromise from "./mongoClient";


export const authOptions:AuthOptions = {
  secret: process.env.AUTH_SECRET,
  providers: [
      GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID as string,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
    // @ts-ignore
    adapter: MongoDBAdapter(clientPromise),

  }