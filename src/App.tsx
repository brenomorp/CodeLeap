import Button from "./components/Button";

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex w-[500px] flex-col rounded-2xl bg-white p-6">
        <h1 className="mb-6 text-title font-bold leading-title">
          Welcome to CodeLeap network!
        </h1>
        <form className="flex flex-col">
          <label htmlFor="name" className="mb-2 text-base font-normal">
            Please enter your username
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="John Doe"
            className="mb-6 w-full rounded-lg border border-[#777777] px-3 py-2 placeholder:text-sm"
          />
          <Button color="blue" type="submit">
            ENTER
          </Button>
        </form>
      </div>
    </main>
  );
}

export default App;
