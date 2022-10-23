import Link from 'next/link';
import Image from 'next/future/image';

import Container from 'components/container';
import avatar from 'public/avatar.jpeg';

export default function About() {
  return (
    <Container title="About – Manish Kumar">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h2>Links</h2>
          <ul>
            <li>
              Twitter: <a href="https://twitter.com/manis_jha">@manis_jha</a>
            </li>
            <li>
              GitHub: <a href="https://github.com/maniskasyap">@maniskasyap</a>
            </li>
            <li>
              Website:{' '}
              <Link href="https://sayhimanish.com">
                <a>https://sayhimanish.com</a>
              </Link>
            </li>
            <li>
              LinkedIn:{' '}
              <a href="https://www.linkedin.com/in/mk1988/">
                https://www.linkedin.com/in/mk1988
              </a>
            </li>
          </ul>
          <h2>Bio</h2>
          <h3>Job Title</h3>
          <p>Manish Kumar, Software Engineering Manager at Next50</p>
          <h2>Headshots</h2>
          <div className="flex space-x-8">
            <a href="/avatar.jpeg">
              <Image
                alt="Manish Kumar headshot"
                width={400}
                quality={100}
                src={avatar}
                className="rounded-md"
              />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
