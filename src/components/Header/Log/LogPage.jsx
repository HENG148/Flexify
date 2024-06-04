import React, { useState } from 'react'
import Logo from '../../../assets/Logo/logo.png'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import SignUP from './LogIn_SignUp/Signup';
import LogIn from './LogIn_SignUp/LogIn';

export default function LogPage() {

  // const [changed, setChanged] = useState('Sign Up');
  // const LoginClick = () => {
  //   setChanged('Log In')
  // };
  // const SignUpClick = () => {
  //   setChanged('Sign Up');
  // }
  const [changed, setChanged] = useState('Sign Up');
  const handleClick = () => setChanged(changed === 'Sign Up' ? 'Log In' : 'Sign Up');

  return (
    <>
      <div>
        <div className=' flex justify-center bg-gray'>
          <img src={Logo} alt='logo' width='180' />
        </div>

        <Tabs className='grid justify-center border-[2px] ml-[43.5rem] mr-[43.5rem] rounded-xl pt-4 mt-10'>
          <TabList className='gap-[8rem] pl-[4rem] pr-[4rem]'>
            <Tab className='font-main text-[1.1rem] font-medium'
              onClick={() => handleClick('Sign Up')}>Sign Up</Tab>
            <Tab className='font-main text-[1.1rem] font-medium'
              onClick={() => handleClick('Log In')}>Log In</Tab>
          </TabList>

          <div className='pt-3 font-text text-[1.2rem] mt-3 mb-4'>
            <p>{changed}</p>
          </div>

          <TabPanels>
            <TabPanel>
              <SignUP />
            </TabPanel>
            <TabPanel>
              <LogIn />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </>
  )
}
