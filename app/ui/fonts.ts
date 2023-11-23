// import { Roboto } from 'next/font/google';
// import { Oswald } from 'next/font/google';
import { Poppins } from 'next/font/google';
// import { Lato } from 'next/font/google';

// export const inter = Inter({ subsets: ['latin'] });
// export const lusitana = Lusitana({ 
//   weight: ['400', '700'],
//   subsets: ['latin'] 
// });

// const inter = Inter({ subsets: ['latin'], display: 'swap', adjustFontFallback: false})

export const poppins = Poppins({ 
  weight: ['100','200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'] ,
  display: 'swap',
  adjustFontFallback: false
});

// export const oswald = Oswald({ 
//   weight: ['200', '300', '400', '500', '600', '700'],
//   subsets: ['latin'] 
// });

// export const roboto = Roboto({ 
//   weight: ['100', '300', '400', '500', '700', '900'],
//   subsets: ['latin'] 
// });