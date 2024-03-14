/* eslint-disable react/prop-types */
function App() {
  return (
    <div className="flex h-screen flex-col bg-cyan-300">
      <Heading />
      <Container>
        <LeftSide />
        <RightSide />
      </Container>
    </div>
  );
}

function Heading() {
  return (
    <div className="mx-auto mb-10 max-w-min pt-10 sm:pt-20">
      <h1 className="text-3xl font-bold uppercase tracking-[0.85rem] text-cyan-900 ">
        Spli
      </h1>
      <h1 className="text-3xl font-bold uppercase tracking-[0.7rem] text-cyan-900 ">
        tter
      </h1>
    </div>
  );
}

function Container({ children }) {
  return (
    <div className="flex flex-1 flex-col rounded-xl bg-white p-4 sm:mx-auto sm:flex sm:h-96 sm:max-w-[700px] sm:flex-none sm:flex-row">
      {children}
    </div>
  );
}

function LeftSide() {
  return (
    <div className="h-2/3 w-full px-4 py-2 sm:w-1/2">
      <p className="mb-2 text-2xl font-bold text-gray-600">Bill</p>
      <input type="text" className="h-14 w-full bg-gray-100 sm:h-6" />
      <p className="my-2 text-2xl font-bold text-gray-600">Select Tip %</p>
      <div className="flex flex-wrap gap-x-6 gap-y-4 sm:gap-2">
        <TipButton percent={5} />
        <TipButton percent={10} />
        <TipButton percent={15} />
        <TipButton percent={25} />
        <TipButton percent={50} />
        <button className="h-16 w-40 bg-gray-100 text-3xl font-bold text-gray-600 sm:w-20 sm:rounded-sm">
          Custom
        </button>
      </div>
      <p className=" my-2 text-2xl font-bold text-gray-600">Number of People</p>
      <input type="text" className="h-14 w-full bg-gray-100" />
    </div>
  );
}

function TipButton({ percent }) {
  return (
    <button className="h-16 w-40 rounded-lg bg-cyan-900 text-3xl  font-bold text-cyan-50 sm:h-10 sm:w-20 sm:rounded-sm sm:px-6 sm:py-1 sm:text-sm">
      {percent}%
    </button>
  );
}

function RightSide() {
  return (
    <div className="w-full flex-1 rounded-lg bg-cyan-900 p-4 sm:w-1/2 sm:p-4">
      <div className="mb-4 flex justify-between space-x-6">
        <div className="flex-col leading-none">
          <p className="text-2xl font-bold text-cyan-50">Tip Amount</p>
          <p className="text-xl text-cyan-100">/person</p>
        </div>
        <p className="text-5xl font-bold text-emerald-500 sm:text-3xl">0.00$</p>
      </div>
      <div className="flex justify-between">
        <div className="flex-col leading-none">
          <p className="text-2xl font-bold text-cyan-50">Total</p>
          <p className="text-xl text-cyan-100">/person</p>
        </div>
        <p className="text-5xl font-bold text-emerald-500 sm:text-3xl">0.00$</p>
      </div>

      <button className="mt-4 w-full rounded-md bg-emerald-500 py-2 text-3xl font-bold uppercase text-cyan-900 sm:py-1 sm:text-lg">
        Reset
      </button>
    </div>
  );
}

export default App;
