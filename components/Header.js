import Sidebar from "./Sidebar";

export default function Header() {
  return (
    <div className="flex justify-between items-center border-b border-white relative z-1 px-5 py-3">
      <span className="text-2xl text-white">Recipe Buddy</span>
      <Sidebar />
    </div>
  );
}
