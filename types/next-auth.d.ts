import "next-auth";
import "next-auth/jwt";
import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
 
  interface User {
    id: string;
    email: string;
    name?: string;
  }

 
  interface Session {
    User: {
      id: string;
      email: string;
      name?: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    email: string;
  }
}

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      accessToken?: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    accessToken?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    userId?: string;
    accessToken?: string;
  }
}

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string; // Note string type
      accessToken?: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    id: string; // Note string type
    accessToken?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    userId?: string; // Note string type
    accessToken?: string;
  }
}