import Modal from "@/components/Modal";
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
      <body className="bg-one-black">
        {children}
        <Modal />
      </body>
    </html>
  );
}
