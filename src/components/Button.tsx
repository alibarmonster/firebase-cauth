import { ButtonProps } from '@/types';

const Button = ({ type, title, onClick, icon }: ButtonProps) => {
  return (
    <div>
      <button
        type={type}
        title={title}
        onClick={onClick}
        className='bg-yellow-600 rounded-full bg-green-90 px-8 py-4 text-white transition-all hover:bg-yellow-500 flex flex-row items-center justify-center gap-2'
      >
        <label className='bold-10 cursor-pointer'>{title}</label>
        {icon && <span className='icon w-2'>{icon}</span>}
      </button>
    </div>
  );
};

export default Button;
