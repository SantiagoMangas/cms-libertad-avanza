import Link from "next/link";
import { getAllPosts } from "../../lib/posts";
import { Calendar, ChevronRight, Camera } from "lucide-react";

export default function PostsPage() {
    const posts = getAllPosts();

    return (
        <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Últimas <span className="text-purple-600">Actualizaciones</span>
            </h2>
            <p className="text-xl text-gray-600">
                Noticias y avances de la campaña
            </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post) => (
                <article
                key={post.slug}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                <div className="h-48 bg-gradient-to-br from-purple-200 to-purple-300 flex items-center justify-center">
                    <Camera className="w-12 h-12 text-purple-600" />
                </div>
                <div className="p-6">
                    <div className="flex items-center text-sm text-purple-600 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(post.frontmatter.date).toLocaleDateString("es-AR")}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.frontmatter.title}
                    </h3>
                    {post.frontmatter.excerpt && (
                    <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.frontmatter.excerpt}
                    </p>
                    )}
                    <Link
                    href={`/posts/${post.slug}`}
                    className="text-purple-600 font-semibold hover:text-purple-700 flex items-center group"
                    >
                    Leer más
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
                </article>
            ))}
            </div>
        </div>
        </section>
    );
}