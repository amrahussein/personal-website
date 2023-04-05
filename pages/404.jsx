import Layout from "../components/app-layout/TheLayout";
import AppLink from "../components/micros/typography/AppLink";

export default function Custom404() {
  return (
    <Layout>
      <div className='flex flex-col items-center pt-44 pb-96'>
        <h1 className='py-10'>404 - Page Not Found</h1>
        <AppLink
          href='/'
          styles='ml-5 text-3xl underline italic font-mono tracking-widest'
        >
          take me home
        </AppLink>
      </div>
    </Layout>
  );
}
