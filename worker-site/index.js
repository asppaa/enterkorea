export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const blockedPrefixes = ["/.git", "/.github", "/node_modules", "/worker-site", "/workers"];
    const blockedSuffixes = [".map", ".log", ".toml"];

    if (url.hostname === "www.kimpboard.com") {
      url.hostname = "kimpboard.com";
      return Response.redirect(url.toString(), 301);
    }

    if (
      blockedPrefixes.some((prefix) => url.pathname.startsWith(prefix)) ||
      blockedSuffixes.some((suffix) => url.pathname.endsWith(suffix))
    ) {
      return new Response("Not Found", { status: 404 });
    }

    const response = await env.ASSETS.fetch(request);
    const headers = new Headers(response.headers);

    headers.set("X-Content-Type-Options", "nosniff");
    headers.set("X-Frame-Options", "DENY");
    headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
    headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
    headers.set("Cross-Origin-Resource-Policy", "same-origin");
    headers.set("Cross-Origin-Opener-Policy", "same-origin");

    if (url.protocol === "https:") {
      headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
    }

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
