import { ArchitectureAbout, ArchitectureBrand, ArchitectureChoose, ArchitectureFact, ArchitectureHero, ArchitecturePortfolio, ArchitectureService } from "@/components/home/architecture/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Architecture - Digital Agency & Creative Portfolio Nextjs Template",
};

const page = () => {
  return (
    <main>
      <ArchitectureHero />
      <ArchitectureAbout />
      <ArchitectureService/>
      <ArchitectureFact/>
      <ArchitecturePortfolio/>
      <ArchitectureChoose/>
      <ArchitectureBrand/>
    </main>
  );
};

export default page;
