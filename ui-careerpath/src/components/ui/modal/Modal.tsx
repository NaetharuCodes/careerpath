// src/components/ui/modal/Modal.tsx
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button/Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  if (!isOpen) return null;

  const handleModalContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <>
      {isOpen &&
        ReactDOM.createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          >
            <div
              className="bg-background p-6 rounded-lg shadow-lg w-full max-w-md"
              onClick={handleModalContentClick}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-2"
                onClick={onClose}
              >
                <X className="h-4 w-4" />
              </Button>

              <h2 className="text-xl font-bold mb-6">{title}</h2>

              {children}
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default Modal;
