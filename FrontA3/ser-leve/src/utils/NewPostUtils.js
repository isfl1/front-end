import { Posts } from "../data/posts";

function createPost(
  textareaRef,
  postText,
  image,
  currentUser,
  setPostText,
  setImage,
  setPosts,
  setCurrentTime
) {
  if (postText.trim() !== "" || image) {
    const newPost = {
      id: Math.random(),
      name: currentUser.name,
      photo: currentUser.photo,
      time: Date.now(),
      content: { img: image, text: `${postText}` },
    };

    setPosts((prevPosts) => [newPost, ...prevPosts]);
  }

  setPostText("");
  setImage(null);
  setCurrentTime(Date.now());
  textareaRef.current.style.height = "auto";
}

function handleText(e, setPostText, textareaRef) {
  setPostText(e.target.value);
  adjustTextareaHeight(textareaRef);
}

function adjustTextareaHeight(textareaRef) {
  const textarea = textareaRef.current;
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + "px";
}

function handleImage(e, setImage) {
  const file = e.target.files[0];

  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function (e) {
      setImage(e.target.result);
    };
  }

  e.target.value = "";
}

function deletePost(id, setPosts) {
  const newPosts = Posts.filter((post) => post.id != id);
  setPosts(newPosts);
}

export { handleText, handleImage, createPost, deletePost };
