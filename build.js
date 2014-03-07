({
    baseUrl: "js",
    out: "build/built.js",
    name: "almond",
    optimize: "none",
    include: "main",
    wrap: {
        startFile: "frags/start.js",
        endFile: "frags/end.js"
    }
})
