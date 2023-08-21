import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AudioPlex",
  description: "Plex Audio!",
};

interface ExamplesLayoutProps {
  children: React.ReactNode;
}

export default function ExamplesLayout({ children }: ExamplesLayoutProps) {
  return (
    <html>
      <body>
        <div className="container relative">
          <section>
            <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow">
              {children}
            </div>
          </section>
        </div>
      </body>
    </html>
  );
}
