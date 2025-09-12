import React from "react";

export const mdxComponents = {
    a: (props: any) => <a {...props} className="text-blue-600 underline" />,
    img: (props: any) => <img {...props} className="max-w-full h-auto rounded" />,
    pre: (props: any) => <pre {...props} className="p-4 rounded overflow-auto bg-gray-900 text-white" />,
    // exportá más shortcodes / componentes si los necesitás
};
