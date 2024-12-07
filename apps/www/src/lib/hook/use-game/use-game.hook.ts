import { useEffect, useState } from "react"
import { GameState } from "./use-game.type"

export const useGame = (gameId: string) => {
    const [state, setState] = useState<GameState>({
        round: 0,
        phase: "waiting"
    });

    useEffect(() => {
        // TODO: Socket connection and logic
    }, [gameId]);

    return {
        round: state.round
    }
}