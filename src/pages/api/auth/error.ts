import type { APIRoute } from "astro";

export const GET: APIRoute = ({ url, redirect }) => {
  // Get the error message from the URL
  const errorType = url.searchParams.get("error") || "Unknown";
  
  // Redirect to our custom error page with the error parameter
  return redirect(`/auth/error?error=${errorType}`);
};