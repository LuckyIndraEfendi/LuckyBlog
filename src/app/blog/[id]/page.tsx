import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { IoShareOutline } from "react-icons/io5";
const BlogDetails = ({ params }: any) => {
  return (
    <>
      <section id="blog_details" className="mt-32 w-[90%] md:w-[60%] m-auto">
        <div className="blog_details_title">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold">
            Discover Your Rotation Axis
          </h1>
        </div>
        <div className="blog_details_profile_author py-5 flex gap-4 items-center">
          <Avatar>
            <AvatarImage src="/pp.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="nick ">
            <h1 className="font-medium">Lucky Indra Efendi</h1>
            <span className="text-gray-500 text-sm sm:text-sm">
              8 min read &nbsp;·&nbsp; 1 hours ago
            </span>
          </div>
        </div>
        <div className="save_post_details py-2 border-y-[1px] border-gray-200 flex justify-end gap-5">
          <MdOutlineBookmarkAdd className="text-2xl text-gray-600 hover:cursor-pointer" />
          <IoShareOutline className="text-2xl text-gray-600 hover:cursor-pointer" />
        </div>
        <div className="blog_details_content mt-10 text-gray-900 dark:text-gray-300 text-base md:text-lg">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
            harum, modi suscipit hic ab nam possimus animi deserunt sunt totam
            officiis dolor exercitationem a cumque quo assumenda. Fugit
            recusandae dolor dolorum voluptatum possimus a ut consectetur
            perferendis, velit aliquam maxime molestias, autem eos. Et amet
            inventore molestias nulla accusamus molestiae reiciendis ratione in
            pariatur, ipsa blanditiis omnis corrupti, perspiciatis ullam
            recusandae possimus sapiente laudantium voluptate? Eos aperiam
            molestias dolores nostrum consequatur eligendi ratione earum
            cupiditate animi. Eveniet rerum autem natus modi hic repellat
            nesciunt veniam! Ipsum, tempore obcaecati eos corrupti facere,
            ducimus totam, alias eum perferendis nihil unde veniam inventore!
          </p>
        </div>
        <div className="blog_details_tags mt-10">
          <ul className="flex gap-3 flex-wrap">
            {[1, 2, 3, 4, 5].map((item) => (
              <li
                className="bg-gray-200 dark:bg-[rgba(0,0,0,0.1)] dark:ring-1 dark:ring-gray-200 dark:text-gray-300 py-2 px-5 rounded-full text-sm text-gray-900 hover:cursor-pointer"
                key={item}
              >
                Programing
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
