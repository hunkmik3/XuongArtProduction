import localFont from 'next/font/local';

// SF Pro Display - Body text
export const sfProDisplay = localFont({
  src: [
    {
      path: '../../public/fonts/SF-Pro-Display-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SF-Pro-Display-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-sf-pro-display',
  display: 'swap',
});

// Gilroy - Heading alternative
export const gilroy = localFont({
  src: [
    {
      path: '../../public/fonts/SVN-Gilroy Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-gilroy',
  display: 'swap',
});

// Samsung Sharp Sans - Accent/Emphasis
export const samsungSharpSans = localFont({
  src: [
    {
      path: '../../public/fonts/SamsungSharpSans-Regular_SMCPS 5.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SamsungSharpSans-Medium_SMCP.ttf',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-samsung-sharp-sans',
  display: 'swap',
});
