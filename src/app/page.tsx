import { ArchitectureAbout, ArchitectureBrand, ArchitectureChoose, ArchitectureFact, ArchitectureHero, ArchitecturePortfolio, ArchitectureService } from "@/components/home/architecture/sections";
import { ArchitectureFooter, ArchitectureHeader, HeaderSearch } from "@/components/layout";
import { Metadata } from "next";
import { ClientProviders, ThemeProvider } from "@/providers";
import { MagicCursorProvider } from "@/providers/MagicCursorProvider";

export const metadata: Metadata = {
  title: "ITEC Solutions | Ingénierie, Construction & Développement",
};

export default function RootPage() {
  return (
    <ThemeProvider>
      <ClientProviders>
        <MagicCursorProvider bgColor="#fff7ef">
          <HeaderSearch />
          <ArchitectureHeader />
          <div id="smooth-wrapper">
            <div id="smooth-content">
              <main>
                <ArchitectureHero />
                <ArchitectureAbout />
                <ArchitectureService />
                <ArchitectureFact />
                <ArchitecturePortfolio />
                <ArchitectureChoose />
                <ArchitectureBrand />
              </main>
              <ArchitectureFooter />
            </div>
          </div>
        </MagicCursorProvider>
      </ClientProviders>
    </ThemeProvider>
  );
}
