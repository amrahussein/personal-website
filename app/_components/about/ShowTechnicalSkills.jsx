import TechnicalSkills from '../micros/TechnicalSkills';
import ButtonCoolBlue from '../micros/buttons/ButtonCool';

export default function ShowTechnicalSkills({ open, setOpen }) {
  return (
    <>
      {!open && (
        <div className='flex flex-col items-center'>
          <ButtonCoolBlue setOpen={setOpen}>
            Show Technical Skills
          </ButtonCoolBlue>
        </div>
      )}

      <div
        className={` ${
          !open && 'opacity-0'
        } transition-opacity duration-200 ease-out`}
      >
        {open && <TechnicalSkills />}
      </div>
    </>
  );
}
