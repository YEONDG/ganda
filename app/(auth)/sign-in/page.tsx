import SignIn from '@/app/(auth)/_components/sign-in';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const SignInPage = () => {
  return (
    <div className='h-full max-w-2xl mx-auto flex flex-col items-center justify-center gap-20'>
      <Link
        href='/'
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'self-start -mt-20'
        )}
      >
        <ChevronLeft className='mr-2 h-4 w-4' />
        Home
      </Link>

      <SignIn />
    </div>
  );
};
export default SignInPage;