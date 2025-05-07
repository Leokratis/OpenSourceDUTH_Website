import type { DefaultSession, DefaultUser } from "auth-astro";
import type { JWT as DefaultJWT } from "@auth/core/jwt";
import type { AdapterUser } from "@auth/core/adapters";

declare module "auth-astro" {
  interface Session extends DefaultSession {
    user?: {
      isAdmin?: boolean;
      username?: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    login?: string;
    isAdmin?: boolean;
    username?: string;
  }
}

declare module "@auth/core/types" {
  interface User {
    login?: string;
    isAdmin?: boolean;
    username?: string;
  }

  interface Session {
    user?: {
      isAdmin?: boolean;
      username?: string;
    } & DefaultSession["user"];
  }

  interface JWT extends DefaultJWT {
    username?: string;
    isAdmin?: boolean;
  }
}

declare module "@auth/core/jwt" {
  interface JWT {
    username?: string;
    isAdmin?: boolean;
  }
}

// Add ImportMeta augmentation for env variables
interface ImportMeta {
  readonly env: {
    readonly GITHUB_CLIENT_ID: string;
    readonly GITHUB_CLIENT_SECRET: string;
    readonly AUTH_SECRET: string;
    readonly AUTH_TRUST_HOST: string;
    readonly [key: string]: string;
  };
}