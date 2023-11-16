import Nav from '@/components/Nav';
import { useState } from 'react';
import Logo from './Logo';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Layout({ children }) {
  // let session = false;

  const [showNav, setShowNav] = useState(false);

  // const { data: session } = useSession();
  const session = true;

  // console.log({ session, user });

  async function login() {
    const data = await signIn();
    console.log({ data });
  }

  if (!session) {
    return (
      <div className="bg-bgGray w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <button
            className="bg-white p-2 rounded-lg px-4"
            onClick={() => signIn()}
          >
            Login To Admin Panel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-bgGray min-h-screen">
      <div className=" md:hidden flex items-center p-4">
        <button onClick={() => setShowNav(!showNav)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <div className="flex grow mr-6 justify-center">
          <Logo />
        </div>
      </div>
      <div className="flex">
        <Nav show={showNav} />
        <div className="flex-grow p-4 md:ml-[210px]">{children}</div>
      </div>
    </div>
  );
}
