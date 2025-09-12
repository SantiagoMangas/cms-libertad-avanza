import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "../../../lib/post";
import { mdxComponents } from "../../../components/mdx";

    export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((p) => ({ slug: p.slug }));
    }

    export default function PostPage({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const post = getPostBySlug(slug);
    const { frontmatter, content } = post;

    return (
        <article className="max-w-3xl mx-auto py-8 px-4">
        <header className="mb-6">
            <h1 className="text-4xl font-bold">{frontmatter.title}</h1>
            <p className="text-sm text-gray-500 mt-1">{frontmatter.date}</p>
        </header>

        <div className="prose max-w-none">
            <MDXRemote source={content} components={mdxComponents} />
        </div>
        </article>
    );
    }
