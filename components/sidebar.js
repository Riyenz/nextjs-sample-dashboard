import Icon from '../components/icon';
import Link from 'next/link';
import Logo from '../assets/logo.svg';

export default function Sidebar() {
  const menus = [
    {
      href: '/',
      icon: 'home',
    },
    {
      href: '/',
      icon: 'profile',
    },
    {
      href: '/',
      icon: 'users',
    },
    {
      href: '/',
      icon: 'mail',
    },
    {
      href: '/',
      icon: 'play',
    },
    {
      href: '/',
      icon: 'chart',
    },
    {
      href: '/',
      icon: 'cog',
    },
  ];

  return (
    <div className='w-[98px] h-screen fixed top-0 left-0 bg-[#FDFDFF] flex flex-col items-center py-12'>
      <Logo className='w-[42px] mb-20' />

      <div className='flex flex-col space-y-12 items-center w-full'>
        {menus.map((menu, index) => {
          return (
            <Link key={index} href={menu.href}>
              <a
                className={[
                  'relative group w-full flex justify-center',
                  menu.icon === 'chart'
                    ? 'text-primary'
                    : 'text-[#DFE6F1] hover:text-primary hover:opacity-70',
                ].join(' ')}
              >
                {menu.icon === 'chart' && (
                  <span className='bg-primary w-4 h-12 rounded-xl absolute top-1/2 -left-3 transform -translate-y-1/2' />
                )}
                <span className='hidden bg-primary opacity-70 w-4 h-12 rounded-xl absolute top-1/2 -left-3 transform -translate-y-1/2 group-hover:block' />

                <Icon name={menu.icon} />
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
