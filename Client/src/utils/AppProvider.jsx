/* eslint-disable react/prop-types */

import { AuthProvider } from "../context/AuthContext";
import { ChatProvider } from "../context/ChatContext";
import { TestsProvider } from "../context/TestsContext";

export default function AppProvider({ children }) {
  return (
    <>
      <AuthProvider>
        <TestsProvider>
          <ChatProvider>{children}</ChatProvider>
        </TestsProvider>
      </AuthProvider>
    </>
  );
}
