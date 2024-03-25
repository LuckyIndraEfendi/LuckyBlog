import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { BsStars } from "react-icons/bs";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <div className="w-[90%] m-auto mt-28">
        <section id="content">
          <div className="blog_content_container grid-cols-1 grid sm:grid-cols-2 gap-10">
            {[1, 2].map((item) => (
              <article key={item}>
                <div className="article_image">
                  <Image
                    src="/blog.webp"
                    alt=""
                    width={400}
                    height={400}
                    className="w-full"
                  />
                </div>
                <div className="article_author py-3 flex items-center gap-2 ">
                  <Avatar className={cn("w-6 h-6")}>
                    <AvatarImage src="./pp.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <h5 className="text-[13px] font-sans ">Lucky Indra Efendi</h5>
                </div>
                <div className="article_header">
                  <h2 className="font-sans text-xl font-bold text-zinc-900 dark:text-gray-300 py-1">
                    Many Articles Tell You Python Tricks, But Few Tell You Why
                  </h2>
                  <p className="text-zinc-500 font-medium">
                    Three common Python tricks make your program faster, I will
                    explain the mechanisms
                  </p>
                </div>
                <div className="article_release py-3 flex items-center gap-2">
                  <BsStars className="text-yellow-400 text-lg" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium text-sm sm:text-sm">
                    8 min read &nbsp;·&nbsp; 1 hours ago
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="content" className="mt-10">
          <div className="blog_content_container grid-cols-1 grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <article key={item} className="flex items-center gap-3 sm:block">
                <div className="article_image order-2 sm:order-1 w-2/3 sm:w-full">
                  <Image
                    src="/blog.webp"
                    alt=""
                    width={400}
                    height={400}
                    className="sm:w-full object-cover "
                  />
                </div>
                <div className="post_article_content">
                  <div className="article_author py-3 flex items-center gap-2 ">
                    <Avatar className={cn("w-6 h-6")}>
                      <AvatarImage src="./pp.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <h5 className="text-[13px] font-sans ">
                      Lucky Indra Efendi
                    </h5>
                  </div>
                  <div className="article_header">
                    <h2 className="font-sans text-xl font-bold text-zinc-900 py-1 dark:text-gray-300">
                      Many Articles Tell You Python Tricks, But Few
                    </h2>
                    <p className="text-zinc-500 font-medium">
                      Three common Python tricks make your program faster, I
                      will explain the mechanisms
                    </p>
                  </div>
                  <div className="article_release py-3 flex items-center gap-2">
                    <BsStars className="text-yellow-400 text-lg" />
                    <span className="text-gray-700 font-medium text-sm sm:text-sm dark:text-gray-300">
                      8 min read &nbsp;·&nbsp; 1 hours ago
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
