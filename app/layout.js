import MainHeader from "@/components/main-header/main-header";
import "./globals.css";

export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
    <script async defer data-website-id="71ab2c69-1a57-48b9-9782-66ac92645389" src="https://metrics.com.tm/ynamly.js"></script>
        <MainHeader />

        {children}
      </body>
    </html>
  );
}
