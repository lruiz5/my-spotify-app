import "./globals.css";
import { Metadata } from "next";
import { Menu } from "@/components/menu";
import { Sidebar } from "@/components/sidebar";
import { playlists } from "@/data/playlists";

export const metadata: Metadata = {
  title: "My Spotify",
  description: "My Spotify",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
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
              <div className="hidden md:block">
                <Menu />
                <div className="border-t">
                  <div className="bg-background">
                    <div className="grid lg:grid-cols-5">
                      <Sidebar
                        playlists={playlists}
                        className="hidden lg:block"
                      />
                      {children}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </body>
    </html>
  );
}
