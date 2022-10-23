import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Container from '../components/container'

const Home: NextPage = () => {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-4xl tracking-tight mb-1 text-black dark:text-white">
              Manish Kumar
            </h1>
            <h2 className="text-gray-700 dark:text-gray-200 mb-4">
              Engineering Manager at{' '}
              <span className="font-semibold">Next50</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-16">
              Making engineering teams succeed at building visionary software
              products. Helping tech teams to work with empathy for users.
            </p>
          </div>
          <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
            <Image
              alt="Manish Kumar"
              height={176}
              width={176}
              src="/avatar.jpeg"
              sizes="30vw"
              priority
              className="rounded-full filter grayscale"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
