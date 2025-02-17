import Chat from "../components/Chat";

export default function Home() {
  return (
    <div className="h-full flex justify-center items-center">
      <div className="bg-base-200 w-full max-w-4xl rounded-lg shadow-lg p-6 md:p-12">
      <Chat />
      </div>
    </div>
  )
}
