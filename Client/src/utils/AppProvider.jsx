/* eslint-disable react/prop-types */

import { AuthProvider } from "../context/AuthContext";
import { ChatProvider } from "../context/ChatContext";
import { GameProvider } from "../context/GameContext";
import { TestsProvider } from "../context/TestsContext";

export default function AppProvider({ children }) {
  return (
    <>
      <AuthProvider>
        <TestsProvider>
          <GameProvider>

          <ChatProvider>{children}</ChatProvider>
          </GameProvider>
        </TestsProvider>
      </AuthProvider>
    </>
  );
}
