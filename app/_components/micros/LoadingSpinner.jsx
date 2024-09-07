import { PuffLoader } from 'react-spinners';

export default function LoadingSpinner() {
  const colorPrimary = '#00798F';
  return (
    <div className='flex h-screen items-center justify-center'>
      <PuffLoader color={colorPrimary} />
    </div>
  );
}
