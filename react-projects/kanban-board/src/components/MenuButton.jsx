const MenuButton = ({ buttonText }) => {
  return (
    <>
      <button className="flex text-lg bg-slate-500 rounded pl-2 pr-4">
        <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff" viewBox="0 0 256 256">
          <path d="M156,128a28,28,0,1,1-28-28A28,28,0,0,1,156,128ZM128,76a28,28,0,1,0-28-28A28,28,0,0,0,128,76Zm0,104a28,28,0,1,0,28,28A28,28,0,0,0,128,180Z"></path>
        </svg> {buttonText}
      </button>
    </>
  );
};

export default MenuButton;
