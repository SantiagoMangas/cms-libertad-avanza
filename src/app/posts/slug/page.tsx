import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "../../../lib/posts";
import { mdxComponents } from "../../../components/mdx";

// Genera todas las rutas estáticas de los posts
export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((p) => ({ slug: p.slug }));
}

// Página individual de un post
export default function PostPage({ params }: { params: { slug: string } }) { //Error. No reconstruye el .md
    const { slug } = params;
    const post = getPostBySlug(slug);
    const { frontmatter, content } = post;

    return (
        <article className="max-w-3xl mx-auto py-20 px-4">
        <header className="mb-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {frontmatter.title}
            </h1>
            <p className="text-sm text-purple-600">
            {new Date(frontmatter.date).toLocaleDateString("es-AR")}
            </p>
        </header>

        <div className="prose prose-lg max-w-none prose-purple">
            <MDXRemote source={content} components={mdxComponents} />
        </div>
        </article>
    );
}