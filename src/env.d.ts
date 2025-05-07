/// <reference path="../.astro/db-types.d.ts" />
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="simple-stack-form/types" />

interface ImportMeta {
  readonly env: {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly GITHUB_CLIENT_ID: string;
    readonly GITHUB_CLIENT_SECRET: string;
    readonly AUTH_SECRET: string;
    readonly AUTH_TRUST_HOST: string;
    // Add any other environment variables your project uses
    readonly [key: string]: string | undefined;
  };
}