import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  children: React.ReactNode;
  onClose?: () => void;
}

const Modal = ({ children }: ModalProps) => {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const modal = dialog.current;
    if (!modal) return;
    modal.showModal();

    return () => {
      modal.close();
    };
  }, []);

  return createPortal(
    <dialog className="modal rounded-lg p-4 bg-white/0 min-w-screen min-h-screen items-center justify-center flex" ref={dialog}>
      {children}
    </dialog>,
    document.getElementById("modal") as HTMLDivElement,
  );
};

export default Modal;
