import Link from "next/link";
import { getAllPosts } from "../../lib/post";

export default function PostsPage() {
    const posts = getAllPosts();

    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold mb-6">Blog / Actualizaciones</h1>

        <ul className="space-y-4">
            {posts.map((post) => (
            <li key={post.slug} className="p-4 border rounded-lg">
                <Link href={`/posts/${post.slug}`} className="text-xl font-semibold">
                    {post.frontmatter.title}
                </Link>
                <p className="text-sm text-gray-500">{post.frontmatter.date}</p>
                {post.frontmatter.excerpt && <p className="mt-2 text-gray-700">{post.frontmatter.excerpt}</p>}
            </li>
            ))}
        </ul>
    </div>
    );
}
