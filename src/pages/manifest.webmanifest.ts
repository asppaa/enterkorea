export function GET() {
  return Response.json({
    name: '김프보드',
    short_name: '김프보드',
    lang: 'ko',
    start_url: '/',
    display: 'standalone',
    background_color: '#08111f',
    theme_color: '#08111f',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  });
}
