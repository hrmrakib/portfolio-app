import Link from "next/link";

export default function NotFound() {
  return (
    <div className='min-h-screen bg-[#02050A] flex items-center justify-center px-4 relative overflow-hidden'>
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-pulse'></div>
        <div className='absolute top-40 right-20 w-24 h-24 bg-accent/10 rounded-full blur-lg animate-pulse delay-300'></div>
        <div className='absolute bottom-32 left-1/4 w-40 h-40 bg-primary/3 rounded-full blur-2xl animate-pulse delay-700'></div>
        <div className='absolute bottom-20 right-10 w-20 h-20 bg-accent/8 rounded-full blur-md animate-pulse delay-500'></div>

        <div className='absolute inset-0 bg-[linear-gradient(rgba(8,145,178,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(8,145,178,0.03)_1px,transparent_1px)] bg-[size:50px_50px]'></div>
      </div>

      <div className='max-w-lg w-full text-center space-y-8 relative z-10'>
        <div className='space-y-4'>
          <div className='relative'>
            <h1 className='text-9xl font-bold text-[#f8f8f8] font-mono tracking-wider'>
              404
            </h1>
            <div className='absolute inset-0 text-9xl font-bold text-[#0ea5e9] font-mono tracking-wider blur-sm'>
              404
            </div>
          </div>
          <div className='flex justify-center items-center space-x-2'>
            <div className='h-px w-8 bg-gradient-to-r from-transparent to-primary'></div>
            <div className='h-1 w-4 bg-primary rounded-full'></div>
            <div className='h-px w-8 bg-gradient-to-l from-transparent to-primary'></div>
          </div>
        </div>

        <div className='space-y-4'>
          <h2 className='text-3xl font-semibold text-[#f8f8f8]'>
            Oops! Page Not Found
          </h2>
          <p className='text-[#a2a2a2] leading-relaxed text-lg'>
            It seems the page you&apos;re looking for doesn&apos;t exist. It
            might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        <div className='flex flex-col sm:flex-row gap-4 justify-center pt-4'>
          <button className='w-full sm:w-auto bg-[#0ea5e9] hover:bg-primary/90 text-[#f8f8f8] font-medium px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105'>
            <Link href='/'>← Back to Home</Link>
          </button>
          <button className='w-full sm:w-auto border-[#0ea5e9] text-[#0ea5e9] bg-[#0ea5e9]/10 hover:border-[#0ea5e9]/50 font-medium px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105 hover:bg-transparent'>
            <Link href='/#contact'>Get in Touch</Link>
          </button>
        </div>

        <div className='pt-8 space-y-4'>
          <div className='flex justify-center space-x-3'>
            <div className='w-2 h-2 bg-primary/60 rounded-full animate-pulse'></div>
            <div className='w-2 h-2 bg-primary/80 rounded-full animate-pulse delay-150'></div>
            <div className='w-2 h-2 bg-primary rounded-full animate-pulse delay-300'></div>
            <div className='w-2 h-2 bg-accent/80 rounded-full animate-pulse delay-450'></div>
            <div className='w-2 h-2 bg-accent/60 rounded-full animate-pulse delay-600'></div>
          </div>

          <div className='text-xs text-muted-foreground/50 font-mono'>
            <span className='text-primary/60'>{"</"}</span>
            <span>page</span>
            <span className='text-primary/60'>{">"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
