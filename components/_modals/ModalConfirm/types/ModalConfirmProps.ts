export interface ModalConfirmProps {
  title: string;
  className?: string,
  cancelText?: string;
  confirmText?: string;
  onConfirm?: () => void;
};
