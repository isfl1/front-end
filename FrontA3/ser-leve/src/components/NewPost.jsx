import { useRef, useState } from "react";
import { createPost, handleImage, handleText } from "../utils/NewPostUtils";
import { PhotoIcon } from "@heroicons/react/24/outline";
import { currentUser } from "../data/currentUser";

function NewPost({ setPosts, setCurrentTime }) {
  const [postText, setPostText] = useState("");
  const [image, setImage] = useState(undefined);
  const textareaRef = useRef(undefined);

  return (
    <div className="bg-white rounded-lg p-2">
      <div className="flex items-start">
        <textarea
          ref={textareaRef}
          type="text"
          rows={1}
          value={postText}
          placeholder="What's in your mind?"
          className="w-full outline-none px-2 resize-none py-2 overflow-hidden"
          onChange={(e) => handleText(e, setPostText, textareaRef)}
        />

        <button
          className="font-bold bg-orange-600 px-7 py-2 rounded-lg text-white text-sm hover:bg-orange-500 transition-all"
          onClick={() =>
            createPost(
              textareaRef,
              postText,
              image,
              currentUser,
              setPostText,
              setImage,
              setPosts,
              setCurrentTime
            )
          }
        >
          Post
        </button>
      </div>
      <div>
        <label
          htmlFor="image-upload"
          className="inline-flex gap-1 items-center cursor-pointer hover:text-orange-500 transition-all"
        >
          <PhotoIcon className="size-5" />
          <span className="font-semibold text-sm hidden sm:inline">Photo</span>
        </label>

        <input
          type="file"
          id="image-upload"
          accept="image/*"
          className="hidden"
          onChange={(e) => handleImage(e, setImage)}
        />
      </div>

      {image && <img src={image} className="h-36 p-2" />}
    </div>
  );
}

export default NewPost;