// Variables are inferred to the general type by default.
// We all know `as` could be used to help in those cases. 
// `as const` is something I wasn't aware of before

declare function handleRequest(url: string, method: "GET" | "POST"): void

const req = { url: "https://example.com", method: "GET" } // as const
handleRequest(req.url, req.method)