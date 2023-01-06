import { PuffLoader } from 'react-spinners';

export default function LoadingSpinner() {
  const colorPrimary = '#00798F';
  return (
    <div className='h-screen flex justify-center items-center'>
      <PuffLoader color={colorPrimary} />
    </div>
  );
}
