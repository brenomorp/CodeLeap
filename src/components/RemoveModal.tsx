import Button from "./Button";

function RemoveModal() {
  return (
    <div className="absolute right-0 top-0 flex h-screen w-screen items-center justify-center bg-[#777]/80">
      <div className="flex h-fit w-[660px] flex-col rounded-2xl bg-white p-6">
        <p className="mb-10 text-title font-bold">
          Are you sure you want to delete this item?
        </p>
        <div className="flex gap-4 self-end">
          <Button type="button">Cancel</Button>
          <Button color="red" type="button">
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default RemoveModal;
