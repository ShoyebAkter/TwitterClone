import sanityClient from '@sanity/client'

export const client=sanityClient({
    projectId: "3a6b7at5",
    dataset:'production',
    apiVersion: 'v1',
    token: "skXt5gqxbRbZN4xzQl0bY1sVu3qaUtrcIljFp22nLqA1hliJaPpAwkqPNkDMMBZIsChwxBxbiVcnBSMBQ6Tulbtw9wd8st8ug3QWN2KvXr6aSGgcUryyNJmYwCDlaSj2epy7kh5xsHHjwjuY773rIdNkkVoCiLOPuCGVtOAXNnk7MbuJBDY9",
    useCdn:false,
})