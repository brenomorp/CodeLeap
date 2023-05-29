import deleteIcon from "../assets/images/delete.svg";
import editIcon from "../assets/images/edit.svg";

interface IPost {
  post: {
    id: number;
    username: string;
    created_datetime: string;
    title: string;
    content: string;
  };
}

function Card({ post }: IPost) {
  const createdAt = new Date(post.created_datetime);
  const now = new Date();
  const minutes = Math.floor((Number(now) - Number(createdAt)) / 60000); //60000 = 1sec
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  function pluralize(value: number, word: string) {
    if (value > 1) {
      return word.concat("s");
    }
    return word;
  }

  return (
    <div className="mb-6">
      <div className="flex w-full justify-between rounded-t-2xl bg-blue p-6">
        <h2 className="text-title font-bold leading-title text-white">
          {post.title}
        </h2>
        <div className="flex gap-8">
          <img
            src={deleteIcon}
            alt="trash can"
            className="cursor-pointer hover:scale-110"
          />
          <img
            src={editIcon}
            alt="trash can"
            className="cursor-pointer hover:scale-110"
          />
        </div>
      </div>
      <div className="rounded-b-2xl border-x border-b border-[#999999] p-6 text-lg">
        <div className="mb-4 flex items-center justify-between text-[#777]">
          <p className="text-bold">@{post.username}</p>
          <time>
            {minutes < 60
              ? `${minutes} ${pluralize(minutes, "minute")} ago`
              : `${hours} ${pluralize(hours, "hour")} ${
                  remainingMinutes > 0
                    ? `and ${remainingMinutes} ${pluralize(
                        remainingMinutes,
                        "minute"
                      )} ago`
                    : "ago"
                }`}
          </time>
        </div>
        <p>{post.content}</p>
      </div>
    </div>
  );
}

export default Card;
