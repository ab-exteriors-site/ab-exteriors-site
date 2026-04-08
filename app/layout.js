export const metadata = {
  title: "AB Exteriors",
  description: "Professional window cleaning services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
