export default {
  async fetch(request) {
    const url = new URL(request.url);
    url.hostname = "kimpboard.com";
    return Response.redirect(url.toString(), 301);
  },
};
