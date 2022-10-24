import Link from 'next/link';
// import useSWR from 'swr';
import cn from 'classnames';
import ExternalLink from './ExternalLink';

// import fetcher from 'lib/fetcher';
// import { Views } from 'lib/types';

export default function BlogPostCard({
  title,
  href,
  claps,
  publisher,
  gradient,
}) {
  // const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher);
  // const views = data?.total;

  return (
    <a
      className={cn(
        'transform hover:scale-[1.01] transition-all',
        'rounded-xl w-full bg-gradient-to-r p-1',
        gradient
      )}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex flex-col justify-between h-full bg-white dark:bg-gray-900 rounded-lg p-4">
        <div className="flex flex-col md:flex-row justify-between">
          <h4 className="text-lg md:text-lg font-medium mb-4 sm:mb-6 w-full text-gray-900 dark:text-gray-100 tracking-tight">
            {title}
          </h4>
        </div>
        <div className="flex items-center w-full text-gray-800 dark:text-gray-200 capsize">
          {/* <ExternalLink href="https://medium.com/all-is-web">
            All is Web
          </ExternalLink> */}
          <span className="hover:text-gray-600 transition">
            <span className="text-gray-500">Published in</span> {publisher}
          </span>
          <div className="flex ml-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="0"
              stroke="currentColor"
              className="w-6 h-6 fill-[#bdc3c7]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
              />
            </svg>
            <span className="ml-1 align-baseline capsize">
              {new Number(claps).toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}
