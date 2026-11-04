export default function App() {
  return (
    <>
      <div className="flex items-center justify-between  p-4">
        <span className="font-bold">MyBlog</span>
        <div className="flex gap-4">
          <a href="#">Home</a>
          <a href="#">About</a>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-blue-100 p-4 text-black">Card 1</div>
        <div className="bg-blue-200 p-4 text-black">Card 2</div>
        <div className="bg-blue-300 p-4 text-black">Card 3</div>
        <div className="bg-blue-400 p-4 text-white">Card 4</div>
        <div className="bg-blue-500 p-4 text-white">Card 5</div>
        <div className="bg-blue-600 p-4 text-white">Card 6</div>
      </div>

      <div className="grid grid-cols-3 gap-4 p-4">
        <div className="rounded border p-4">A</div>
        <div className="rounded border p-4">B</div>
        <div className="rounded border p-4">C</div>
      </div>
    </>
  )
}