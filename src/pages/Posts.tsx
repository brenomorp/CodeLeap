import Button from "../components/Button";
import Card from "../components/Card";
import EditModal from "../components/EditModal";
import RemoveModal from "../components/RemoveModal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions/postSlice";
import { AppDispatch } from "../redux/store";
import { RootState } from "../redux/store";
import LoadingScreen from "../components/LoadingScreen";

function Posts() {
  const [content, setContent] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  const { data, loading } = useSelector((state: RootState) => state.posts);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mx-auto min-h-screen max-w-[800px] flex-1 bg-white">
      <header className="w-full bg-blue px-9 py-7 text-white">
        <h1 className="text-title font-bold leading-title">CodeLeap Network</h1>
      </header>
      <main className="p-6">
        <div className="mb-6 flex flex-col rounded-2xl border border-[#999999] p-6">
          <form className="flex flex-col">
            <h2 className="mb-6 text-title font-bold leading-title">
              What&#8217;s on your mind?
            </h2>
            <label htmlFor="title" className="mb-2 text-base leading-snug">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Hello World"
              className="mb-6 w-full rounded-lg border border-[#777777] bg-transparent px-3 py-2 placeholder:text-sm"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="content" className="mb-2 text-base leading-snug">
              Content
            </label>
            <textarea
              name="content"
              placeholder="Content here"
              id="content"
              className="mb-6 h-20 w-full resize-none rounded-lg border border-[#777777] bg-transparent px-3 py-2 placeholder:text-sm"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            {!content || !title ? (
              <Button disabled>Create</Button>
            ) : (
              <Button color="blue" type="submit">
                Create
              </Button>
            )}
          </form>
        </div>

        {loading ? (
          <LoadingScreen />
        ) : (
          data.results.map((post) => <Card key={post.id} post={post} />)
        )}
        {/* <RemoveModal /> */}
        {/* <EditModal /> */}
      </main>
    </div>
  );
}

export default Posts;
