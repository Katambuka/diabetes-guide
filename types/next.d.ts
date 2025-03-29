import 'next';

declare module 'next/server' {
  interface NextResponse {
    json: (body: Record<string, unknown>) => NextResponse;
  }
}
