import Image from "next/image";
import Head from "next/head";
import Button from "@/components/ui/button";
// images
import Img404 from '@/public/assets/images/404.png'

const ErrorPage = () => {
  return (
    <>
      <Head>
        <title>!404-Det finns inget här</title>
      </Head>
      <div className="w-full min-h-[80vh] flex items-center justify-start flex-col gap-8 md:py-20 py-8 px-6">
        <h5 className="text-4xl text-blue28 font-bold">404</h5>
        <Image src={Img404} alt='404' className="sm:w-52 w-40 sm:h-80 h-60" />
        <h2 className="text-2xl text-blue28">Det finns inget här</h2>
        <Button link="/" className="sm:!max-w-[12rem] !rounded-md">
          Gå till hem
        </Button>
      </div>
    </>
  );
};

ErrorPage.layout = "L1";
export default ErrorPage;
