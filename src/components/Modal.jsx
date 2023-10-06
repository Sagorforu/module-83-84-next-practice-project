import { forwardRef, useRef } from "react";

const Modal = ({ closeModal, updateData, handleSubmit }, ref) => {
  const formRef = useRef(null);
  return (
    <dialog onSubmit={handleSubmit} ref={ref} className="w-[98%] max-w-[500px] rounded-md p-4">
      <div className="text-right mb-2">
        <div className="">
          <button
            onClick={() => {
              closeModal(), formRef.current.reset();
            }}
            className="text-4xl hover:rounded-full hover:bg-red-100"
          >
            ×
          </button>
        </div>
      </div>
      <form ref={formRef}>
        <input
          className="mb-2 p-2 w-full focus:outline-none border "
          type="text"
          placeholder="name"
          name="name"
          defaultValue={updateData?.name}
        />
        <input
          className="w-full mb-2 p-2 focus:outline-none border "
          type="number"
          placeholder="price"
          name="price"
          defaultValue={updateData?.price}
        />
        <button className="text-white px-3 py-1 bg-green-500 focus:outline-none">
          Submit
        </button>
      </form>
    </dialog>
  );
};

export default forwardRef(Modal);
