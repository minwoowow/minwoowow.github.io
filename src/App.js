import Portfolio from "./Portfolio";

function App() {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="fixed w-full h-3 bg-gradient-to-r from-sky-700 to-cyan-100"></div>
      <Portfolio />
      <div className="w-full h-10 bg-gradient-to-l from-sky-700 to-cyan-100 mt-20"></div>
    </div>
  );
}

export default App;
