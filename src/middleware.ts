import { defineMiddleware } from "astro/middleware";



export const onRequest = defineMiddleware((context, next) => {
    if ( context.url.pathname.startsWith('/en')){
        console.log("en");
        context.cookies.set("lang", "en", {
            maxAge: 60 * 60 * 24 * 7,
            path: "/",
        });
    }else{
        console.log("tr");
        context.cookies.set("lang", "tr", {
            maxAge: 60 * 60 * 24 * 7,
            path: "/",
        });
    }
    return next();
});