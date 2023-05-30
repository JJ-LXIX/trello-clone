import "./globals.css";

export const metadata = {
  title: "LXIX Todo App",
  description: "LXIX",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
