import { Component } from "@only-win/types/ui";
import { HeaderSection } from "./_sections/header.section";
import { RolesSection } from "./_sections/roles.section";

const HomePage: Component = () => {
  return (
    <>
      <HeaderSection />
      <RolesSection />
    </>
  );
}

export default HomePage;