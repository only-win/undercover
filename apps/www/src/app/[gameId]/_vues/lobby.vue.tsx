import { Card, CardHeader } from "@/lib/component/ui/card";
import { Chat } from "./_components/chat";
import { Input } from "@/lib/component/ui/input";
import Image from "next/image";

const players = ["Giselle", "Liam", "Ella", "Noah", "Ava", "Oliver", "Isabella"];

const LobbyVue = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-row p-4 gap-2 h-[45rem] w-[80rem]">
        <Chat />
        
        <div className="flex flex-col gap-2 w-8/12">
          <Card>
            <CardHeader className="bg-[#141314] flex flex-row justify-between">
              <div className="flex flex-col gap-2">
                <p className="text-left font-normal">Choose a name</p>
                <Input placeholder="Name" />
              </div>
              <Image src="https://api.dicebear.com/9.x/pixel-art/png?seed=player" width={32} height={32} alt="avatar" />
            </CardHeader>
          </Card>

          <Card className="h-full">
            <div className="flex grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-2">
              {players.map((player, index) => (
                <div className="flex flex-col bg-[#0A090A] items-center">
                  <Image src={"https://api.dicebear.com/9.x/pixel-art/png?seed=" + player} width={96} height={96} alt="avatar" className="p-2" />
                  <p className="text-center text-xs text-white/90 mb-1.5">{player}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LobbyVue;