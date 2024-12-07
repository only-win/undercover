import { ChooseName } from "./_components/choose-name";

const LobbyVue = () => {
  return (
    // Desktop: Centered in the middle of the screen
    <div className="flex justify-center max-w-5xl mx-auto h-screen">
      <ChooseName />
    </div>
  );
};

export default LobbyVue;