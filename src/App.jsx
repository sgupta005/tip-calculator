import { useState } from "react";

/* eslint-disable react/prop-types */
function App() {
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);
  const [tipPerc, setTipPerc] = useState(0);

  const tipAmount = bill * (tipPerc / 100);
  const tipAmountPerPerson = people === 0 ? 0 : tipAmount / people;
  const billPerPerson = people === 0 ? 0 : bill / people;

  function handleSetBill(bill) {
    setBill(bill);
  }
  function handleSetPeople(people) {
    setPeople(people);
  }
  function handleSetTip(tip) {
    setTipPerc(tip);
  }

  return (
    <div className="flex h-screen flex-col bg-cyan-300">
      <Heading />
      <Container>
        <LeftSide
          onSetBill={handleSetBill}
          onSetPeople={handleSetPeople}
          onSetTip={handleSetTip}
        />
        <RightSide
          tipAmountPerPerson={tipAmountPerPerson}
          billPerPerson={billPerPerson}
        />
      </Container>
    </div>
  );
}

function Heading() {
  return (
    <div className="mx-auto mb-4 max-w-min pt-4 sm:mb-10  sm:pt-20">
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
    <div className="flex flex-1 flex-col gap-8 rounded-3xl bg-white p-4 sm:mx-auto sm:flex sm:h-96 sm:max-w-[700px] sm:flex-none sm:flex-row sm:gap-2">
      {children}
    </div>
  );
}

function LeftSide({ onSetBill, onSetPeople, onSetTip }) {
  return (
    <div className="h-2/3 w-full px-4 py-2 sm:w-1/2">
      <p className="mb-2 text-2xl font-bold text-gray-600">Bill</p>
      <Input stateSetter={onSetBill} />
      <p className="my-4 text-2xl font-bold text-gray-600">Select Tip %</p>
      <div className="mx-auto flex w-72 flex-wrap gap-x-6 gap-y-4 sm:gap-2">
        <TipButton percent={5} onSetTip={onSetTip} />
        <TipButton percent={10} onSetTip={onSetTip} />
        <TipButton percent={15} onSetTip={onSetTip} />
        <TipButton percent={25} onSetTip={onSetTip} />
        <TipButton percent={50} onSetTip={onSetTip} />
        <button className="h-12 w-32 rounded-lg bg-gray-100 text-3xl font-bold text-gray-600 sm:h-10 sm:w-20 sm:rounded-sm sm:text-xl">
          Custom
        </button>
      </div>
      <p className=" mb-2 mt-4 text-2xl font-bold text-gray-600 ">
        Number of People
      </p>
      <Input stateSetter={onSetPeople} />
    </div>
  );
}

function TipButton({ percent, onSetTip }) {
  return (
    <button
      className="h-12 w-32 rounded-lg bg-cyan-900 text-3xl  font-bold text-cyan-50 sm:h-10 sm:w-20 sm:rounded-sm sm:px-6 sm:py-1 sm:text-xl"
      onClick={() => onSetTip(+percent)}
    >
      {percent}%
    </button>
  );
}

function Input({ stateSetter }) {
  const [value, setValue] = useState(0);
  function handleSetValue(e) {
    setValue(+e.target.value);
    stateSetter(+e.target.value);
  }
  return (
    <input
      type="text"
      className="h-12 w-full bg-gray-100 sm:h-10 sm:w-64"
      value={value}
      onChange={handleSetValue}
    />
  );
}

function RightSide({ billPerPerson, tipAmountPerPerson }) {
  return (
    <div className="mb-6 w-full flex-1 rounded-lg bg-cyan-900 p-4 sm:my-2 sm:mr-2 sm:w-1/2 sm:p-4">
      <div className="mb-4 flex justify-between space-x-6">
        <div className="flex-col leading-none">
          <p className="text-2xl font-bold text-cyan-50">Tip Amount</p>
          <p className="text-xl text-cyan-100">/person</p>
        </div>
        <p className="text-5xl font-bold text-emerald-500 sm:text-3xl">
          &#8377;{tipAmountPerPerson.toFixed(2)}
        </p>
      </div>
      <div className="flex justify-between">
        <div className="flex-col leading-none">
          <p className="text-2xl font-bold text-cyan-50">Total</p>
          <p className="text-xl text-cyan-100">/person</p>
        </div>
        <p className="text-5xl font-bold text-emerald-500 sm:text-3xl">
          &#8377;{billPerPerson.toFixed(2)}
        </p>
      </div>

      <button className="mt-4 w-full rounded-md bg-emerald-500 py-2 text-3xl font-bold uppercase text-cyan-900 sm:mt-[116px] sm:py-2 sm:text-2xl">
        Reset
      </button>
    </div>
  );
}

export default App;
