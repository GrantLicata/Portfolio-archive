import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className='flex justify-center'>
      <Head />
      <body className='bg-[#091930] text-white max-w-4xl'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
