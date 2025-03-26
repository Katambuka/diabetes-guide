import 'next';

declare module 'next/server' {
  interface NextResponse {
    json: (body: any) => NextResponse;
  }
}