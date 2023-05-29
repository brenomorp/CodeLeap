import { ChangeEvent, useState } from "react";
import Button from "./components/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserName } from "./actions/postSlice";

function App() {
  const [name, setName] = useState<string>("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(getUserName(name));

    navigate("/posts");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex w-[500px] flex-col rounded-2xl bg-white p-6">
        <h1 className="mb-6 text-title font-bold leading-title">
          Welcome to CodeLeap network!
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="name" className="mb-2 text-base font-normal">
            Please enter your username
          </label>
          <input
            required
            type="text"
            name="name"
            id="name"
            placeholder="John Doe"
            className="mb-6 w-full rounded-lg border border-[#777777] px-3 py-2 placeholder:text-sm"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {!name ? (
            <Button disabled>ENTER</Button>
          ) : (
            <Button color="blue" type="submit">
              ENTER
            </Button>
          )}
        </form>
      </div>
    </main>
  );
}

export default App;
