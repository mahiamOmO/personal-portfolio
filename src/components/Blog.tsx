import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import devToImg from "@/assets/dev.to.webp";
import mediumImg from "@/assets/medium.webp";
import hashnodeImg from "@/assets/hashnode.webp";

const blogs = [
  {
    title: "Use WakaTime and Initialize Your Coding Time",
    excerpt: "Learn how to track your coding productivity with WakaTime and optimize your development workflow.",
    date: "Recent",
    tag: "Productivity",
    link: "https://dev.to/mahiamomo/use-wakatime-and-initialize-your-coding-time-5h6k",
    image: devToImg,
  },
  {
    title: "DOM কী | DOM নিয়ে কিছু বেসিক কথা",
    excerpt: "A comprehensive guide to understanding the Document Object Model (DOM) - the foundation of web development.",
    date: "Recent",
    tag: "Web Dev",
    link: "https://medium.com/@mahiamomo12/dom-%E0%A6%95%E0%A7%80-dom-%E0%A6%A8%E0%A6%BF%E0%A7%9F%E0%A7%87-%E0%A6%95%E0%A6%BF%E0%A6%9B%E0%A7%81-%E0%A6%AC%E0%A7%87%E0%A6%B8%E0%A6%BF%E0%A6%95-%E0%A6%95%E0%A6%A5%E0%A6%BE-b009b4427f0c",
    image: mediumImg,
  },
  {
    title: "How I Hacked My Brain to Crave Coding Every Day",
    excerpt: "Personal insights on building sustainable coding habits and maintaining motivation as a developer.",
    date: "Recent",
    tag: "Career",
    link: "https://mahiamomo.hashnode.dev/how-i-hacked-my-brain-to-crave-coding-every-day",
    image: hashnodeImg,
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Latest <span className="text-gradient">Blogs</span>
          </h2>
          <p className="text-muted-foreground mt-2">
            <a href="https://medium.com/@mahiamomo12" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Read more on Medium →</a>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog, i) => (
            <motion.a
              key={i}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card overflow-hidden hover:border-primary/30 transition-all cursor-pointer group block h-full relative"
              style={blog.image ? {
                backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 100%), url('${blog.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              } : undefined}
            >
              <div className="p-6 h-full flex flex-col justify-between relative z-10">
                <div>
                  <span className={`text-xs font-heading px-3 py-1 rounded-full inline-block ${
                    blog.image 
                      ? 'bg-primary/80 text-white' 
                      : 'text-primary bg-primary/10'
                  }`}>{blog.tag}</span>
                  <h3 className={`text-lg font-heading font-semibold mt-4 mb-2 group-hover:text-primary transition-colors ${
                    blog.image ? 'text-white' : 'text-foreground'
                  }`}>{blog.title}</h3>
                  <p className={`text-sm leading-relaxed mb-4 ${
                    blog.image ? 'text-gray-100' : 'text-muted-foreground'
                  }`}>{blog.excerpt}</p>
                </div>
                <div className={`flex items-center gap-2 text-xs ${
                  blog.image ? 'text-gray-200' : 'text-muted-foreground'
                }`}>
                  <Calendar className="w-3 h-3" />
                  {blog.date}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
