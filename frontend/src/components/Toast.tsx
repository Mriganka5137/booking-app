import { useEffect } from "react";

interface ToastProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

const Toast = ({ message, type, onClose }: ToastProps) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timeout);
  }, [onClose]);

  return (
    <div
      className={`${
        type === "success"
          ? "bg-green-100 text-green-800"
          : "bg-red-100 text-red-800"
      } fixed top-4 right-4 z-50 p-4 max-w-md rounded-md `}
    >
      <div className="flex items-center justify-center ">
        <span className="text-lg font-semibold ">{message}</span>
      </div>
    </div>
  );
};

export default Toast;
