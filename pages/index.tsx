import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Container from '../components/Container';
import BlogPostCard from '../components/BlogPostCard';

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
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
          Blog Posts
        </h3>

        <div className="flex gap-6 flex-col w-full">
          <BlogPostCard
            title="Use nvm, Stay Sane"
            href="https://medium.com/all-is-web/use-nvm-stay-sane-985db5cd6493"
            claps={13}
            publisher="All is Web"
            gradient="from-[#12c2e9] via-[#c471ed] to-[#c471ed]"
          />
          <BlogPostCard
            title="Angular 5 — Creating New Component"
            href="https://betterprogramming.pub/angular-5-creating-new-component-c6c5236f8024"
            claps={455}
            publisher="Better Programming"
            gradient="from-[#aa4b6b] via-[#6b6b83] to-[#2C5364]"
          />
          <BlogPostCard
            title="Placeholders in sass"
            href="https://medium.com/all-is-web/placeholders-in-sass-9fc3339dc002"
            claps={97}
            publisher="All is Web"
            gradient="from-[#59C173] via-[#a17fe0] to-[#2C5364]"
          />
          <BlogPostCard
            title="Angular 5 — using jquery plugins"
            href="https://medium.com/all-is-web/angular-5-using-jquery-plugins-5edf4e642969"
            claps={472}
            publisher="All is Web"
            gradient="from-[#00416A] via-[#799F0C] to-[#FFE000]"
          />
        </div>
        {/* <Link href="/blog"> */}
        <a
          className="cursor-pointer flex mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
          href="https://medium.com/@manis.kasyap"
          target={'_blank'}
        >
          See all posts
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-6 w-6 ml-1"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
            />
          </svg>
        </a>
        {/* </Link> */}
      </div>
    </Container>
  );
};

export default Home;
