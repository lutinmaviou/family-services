'use client';

import clsx from 'clsx';
import { ReactNode } from 'react';

type buttonProps = {
  type?: 'button' | 'submit' | 'reset';
  text: string | ReactNode;
  onClick?: () => void;
  actionButton?: boolean;
};

const Button = ({ type, text, onClick, actionButton }: buttonProps) => {
  return (
    <>
      <button
        name="submit"
        onClick={onClick}
        type={type}
        className={clsx(
          actionButton && ` bg-green-600 rounded-full p-2 text-white w-full mt-4`,
          ` bg-green-600 p-2 text-white w-full mt-4`
        )}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
