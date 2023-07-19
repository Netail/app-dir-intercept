// ?: Uncomment and remove the .next folder to trigger issue
// import { i18n } from '@/i18n';

// export async function generateStaticParams() {
//   return i18n.locales.map(locale => ({ lang: locale }));
// }

const RootLayout = ({
  params,
  children,
  modal,
}) => {
  const { locale } = params;

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <h1>Test project</h1>
        {children}
        {modal}
      </body>
    </html>
  )
}

export default RootLayout;
