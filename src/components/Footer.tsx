import FloatingDockDemo from "@/components/SocialLink"

const Footer = () => {
  return (
    <footer className='px-4 pt-2 bg-[#02050A] text-[#a2a2a2]'>
      <div className='border-t border-t-gray-700 w-[100%] mx-auto'></div>
      <div className='pt-12 px-2 lg:px-5 flex items-center justify-between'>
        <p className='text-sm'>&copy; Rakibul 2024 | All Rights Reserved</p>
        
        <div>
            <FloatingDockDemo />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
