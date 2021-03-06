"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    projectRoot: "./src",
    projectName: "scully-blog",
    outDir: './dist/static',
    routes: {
        '/blog/:slug': {
            type: 'contentFolder',
            slug: {
                folder: "./blog"
            }
        },
    }
};
