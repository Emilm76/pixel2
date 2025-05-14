'use client';
import { showModal } from '@/lib/features/modal/modal-slice';
import { useAppDispatch } from '@/lib/hooks';
import { ReactNode } from 'react';

type ModalButtonProps = {
  children: ReactNode;
  className?: string;
};

export function ModalButton({ children, className }: ModalButtonProps) {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(showModal());
  };

  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  );
}
