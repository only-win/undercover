import type { Component } from "@only-win/types/ui";
import { HeaderSection } from "./_sections/header.section";
import { RolesSection } from "./_sections/roles.section";
import { HowToPlaySection } from "./_sections/howtoplay.section";

const HomePage: Component = () => {
  return (
    <>
      <HeaderSection />
      <RolesSection />
      <HowToPlaySection />
    </>
  );
}

export default HomePage;