import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WoodForma — мебель на заказ",
  description:
    "Кухни, шкафы и гардеробные по индивидуальным размерам с замером, договором и гарантией.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
