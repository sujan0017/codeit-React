import { RxCross1 } from "react-icons/rx";

// eslint-disable-next-line react/prop-types
function Modal({isOpen = false, setIsOpen, title, content, actions }) {
    
  return (
    <div className={isOpen? "block": "hidden"}>
      <div className="h-svh w-full bg-gray-100 fixed top-0 bottom-0 right-0 left-0 bg-opacity-50 flex items-center justify-center   ">
        <div className="w-1/3 min-h-20 px-12 py-10 bg-white shadow-md rounded-xl">
          {/* Modal Title */}
          <div className="flex justify-between">
            <h1 className="font-semibold text-3xl">{title}</h1>
            <button onClick={()=> setIsOpen(false)}>
              <RxCross1 />
            </button>
          </div>

          <p className="py-5">{content}</p>
          <div className="flex justify-center">
            {actions}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
