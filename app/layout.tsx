import Providers from "./providers";
import type { Metadata } from "next";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body style={{ backgroundImage: "url(/bg.jpg)" }}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    default: "Imrane's Portfolio",
    template: "%s - Imrane",
  },
  description: "Imrane's Portfolio",
};
