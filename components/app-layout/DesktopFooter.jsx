import Copyright from "../micros/Copyright";
import GoSocials from "../micros/GoSocials";


export default function DesktopFooter() {
  return (
    <footer className='mt-44 px-10 py-10 flex justify-between items-center absolute bottom-1 inset-x-0 border-solid border-x-0 border-4 border-b-0 border-accent-700 '>
      <Copyright />

      <GoSocials
        socialNames={false}
        styleSocialItems='flex justify-center items-center space-x-10 mr-10'
        linkStyle=' w-6 h-6  rounded-full hover:scale-125 hover:text-important hover:rotate-[5deg]'
      />
    </footer>
  )
}
