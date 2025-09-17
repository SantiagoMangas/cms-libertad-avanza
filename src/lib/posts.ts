import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type FrontMatter = {
    title: string;
    date: string;
    excerpt?: string;
    tags?: string[];
    draft?: boolean;
};

const postsDir = path.join(process.cwd(), "posts");

export function getPostSlugs(): string[] {
    if (!fs.existsSync(postsDir)) return [];
        return fs.readdirSync(postsDir).filter(f => f.endsWith(".mdx") || f.endsWith(".md"));
}

export function getPostBySlug(slug: string) {
    const candidates = [`${slug}.mdx`, `${slug}.md`];
    let fullPath = "";
    for (const file of candidates) {
        const p = path.join(postsDir, file);
        if (fs.existsSync(p)) {
            fullPath = p;
            break;
        }
    }
    if (!fullPath) throw new Error(`Post not found: ${slug}`);

    const raw = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(raw);
        return {
            slug,
            frontmatter: data as FrontMatter,
            content,
    };
}

export function getAllPosts() {
    return getPostSlugs()
        .map(fileName => {
        const slug = fileName.replace(/\.mdx?$/, "");
        return getPostBySlug(slug);
    })
        .filter(p => !p.frontmatter?.draft)
        .sort((a, b) => {
            const da = new Date(a.frontmatter.date || 0).getTime();
            const db = new Date(b.frontmatter.date || 0).getTime();
            return db - da;
    });
}
