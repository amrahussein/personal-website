import ReactSwitch from 'react-switch';

export default function BottomNavSwitch({ checked, onChange }) {
  const primary = '#00798F';

  return (
    <ReactSwitch
      onColor={primary}
      onChange={onChange}
      checked={checked}
      height={20}
      width={50}
    />
  );
}
