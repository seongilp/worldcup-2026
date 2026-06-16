import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "월드컵 2026 · 경기 일정 & 결과 (데모)",
  description:
    "2026 FIFA 월드컵 — 미국·캐나다·멕시코 공동 개최. 조별리그부터 결승까지 경기 일정과 결과를 한눈에. 샘플 데이터 기반 데모.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
