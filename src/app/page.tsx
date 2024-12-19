import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-6 grid-rows-6 gap-2 h-screen p-4 bg-gray-900">
      {/* Header */}
      <div className="col-span-6 row-span-1 bg-gradient-to-r from-purple-500 to-indigo-500 flex justify-center items-center text-white text-lg font-bold">
        header
      </div>

      {/* Sidebar */}
      <div className="col-span-2 row-span-4 bg-gradient-to-b from-teal-400 to-cyan-600 flex justify-center items-center text-white text-lg font-bold">
        sidebar
      </div>

      {/* Content-1 */}
      <div className="col-span-4 row-span-2 bg-gradient-to-br from-blue-400 to-blue-600 flex justify-center items-center text-white text-lg font-bold">
        Content-1
      </div>

      {/* Content-2 */}
      <div className="col-span-2 row-span-2 bg-gradient-to-br from-blue-400 to-blue-600 flex justify-center items-center text-white text-lg font-bold">
        Content-2
      </div>

      {/* Content-3 */}
      <div className="col-span-2 row-span-2 bg-gradient-to-br from-blue-400 to-blue-600 flex justify-center items-center text-white text-lg font-bold">
        Content-3
      </div>

      {/* Footer */}
      <div className="col-span-6 row-span-1 bg-gradient-to-r from-purple-500 to-indigo-500 flex justify-center items-center text-white text-lg font-bold">
        footer
      </div>
    </div>
 
  );
}
