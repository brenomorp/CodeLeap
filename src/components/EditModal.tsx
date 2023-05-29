import Button from "./Button";

function EditModal() {
  return (
    <div className="absolute right-0 top-0 flex h-screen w-screen items-center justify-center bg-[#777]/80">
      <div className="flex h-fit w-[660px] flex-col rounded-2xl bg-white p-6">
        <p className="mb-6 text-title font-bold">Edit item</p>
        <form>
          <label htmlFor="title" className="mb-2 text-base leading-snug">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Hello World"
            className="mb-6 w-full rounded-lg border border-[#777777] bg-transparent px-3 py-2 placeholder:text-sm"
          />
          <label htmlFor="content" className="mb-2 text-base leading-snug">
            Title
          </label>
          <textarea
            name="content"
            placeholder="Content here"
            id="content"
            className="mb-6 h-20 w-full resize-none rounded-lg border border-[#777777] bg-transparent px-3 py-2 placeholder:text-sm"
          />
        </form>
        <div className="flex gap-4 self-end">
          <Button type="button">Cancel</Button>
          <Button color="green" type="button">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
