import sanityClient from '@sanity/client'

export const client=sanityClient({
    projectId: "3a6b7at5",
    dataset:'production',
    apiVersion: 'v1',
    token: "sk6qaIAtFtAB0M6qNDn8MziGXrBfyIUbB5KYSKg43Uh20nKOGlA4lae0nBktbelFQjJkYQ6IdppsMSgemtbSlgqqxKqDtw6El90O0QVvktMxI46xm1BoLWtSBfsCeMcUP0hEziemLGbLJhznJJ6jIQDg4WdlFngpff0597MEtkkjar9jnLLY",
    useCdn:false,
})