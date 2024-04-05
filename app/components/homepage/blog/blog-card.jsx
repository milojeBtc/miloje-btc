// @flow strict
import { timeConverter } from '@/utils/time-converter';
import Image from 'next/image';
import Link from 'next/link';
import { BsHeartFill } from 'react-icons/bs';
import { FaCommentAlt } from 'react-icons/fa';

function BlogCard({ blog }) {

  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group"
    >
      <div className="w-auto overflow-hidden rounded-t-lg cursor-pointer h-44 lg:h-52">
        <Image
          src={blog?.cover_image}
          height={1080}
          width={1920}
          alt=""
          className='w-full h-full transition-all duration-300 group-hover:scale-110'
        />
      </div>
      <div className="flex flex-col p-2 sm:p-3">
        <p className='text-[24px] text-[#d3d8e8] py-3 line-clamp-3 text-center'>
          {blog.name}
        </p>
        <Link className='mb-2 text-sm text-[#bf16f2] text-center' href={blog.URL} >
          {`${blog.URL}`}
        </Link>
        <p className='mb-2 text-sm text-[#16f2b3] text-center'>
          {`${blog.role}`}
        </p>
        <p className='indent-4 text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 text-justify'>
          {blog.description}
        </p>
        <div className='flex flex-wrap mb-2 text-sm text-[#e1fc48] pb-3 lg:pb-6 gap-1'>
          {blog.tools.map((value, index) => <p className='p-1 border border-gray-600' key={index}>{value}</p>)}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;