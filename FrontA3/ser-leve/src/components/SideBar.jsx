import {
    ArrowLeftEndOnRectangleIcon,
    BellIcon,
    ChatBubbleOvalLeftIcon,
  
    GlobeAltIcon,
    HomeIcon,
 
    UserIcon,
  } from "@heroicons/react/24/outline";
  import { currentUser } from "../data/currentUser";
  
  const menu = [
    {
      text: "Home",
      href: "/Home",
      icon: <HomeIcon className="size-5" />,
    },
    {
      text: "Edit Profile",
      href: "/settings",
      icon: <UserIcon className="size-5" />,
    },
    {
      text: "Notifications",
      href: "/notifications",
      icon: <BellIcon className="size-5" />,
    },
    {
      text: "Message",
      href: "/message",
      icon: <ChatBubbleOvalLeftIcon className="size-5" />,
    },
    {
      text: "Explorar",
      href: "/explore",
      icon: <GlobeAltIcon className="size-5" />,
    },
    {
      text: "Logout",
      href: "/Login",
      icon: <ArrowLeftEndOnRectangleIcon className="size-5" />,
    },
  ];
  
  function Sidebar() {
    const path = window.location.pathname;
    return (
      <div className="w-full sm:w-auto fixed bottom-0 left-0 space-y-4 lg:w-1/4 sm:static ">
        <div className="hidden rounded-lg p-4 sm:flex gap-2">
          <img src={currentUser.photo} className="w-12 rounded-full" />
          <div className="leading-snug">
            <p className="font-semibold">{currentUser.name}</p>
            <p className="text-gray-400">{currentUser.username}</p>
          </div>
        </div>
  
        <div className=" flex justify-between sm:flex-col shadow  shadow-black sm:shadow-none text-xl overflow-hidden">
          {menu.map(({ text, href, icon }, i) => (
            <a
              href={href}
              key={i}
              className={`${
                href === path ? "bg-green-500 text-white" : "hover:bg-gray-300"
              } py-6 w-full sm:px-10 font-bold flex sm:justify-normal justify-center gap-1 items-center transition-all`}
            >
              <span>{icon}</span>
              <span className="hidden sm:inline">{text}</span>
            </a>
          ))}
        </div>
      </div>
    );
  }
  
  export default Sidebar;