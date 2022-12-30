import sanityClient from '@sanity/client'

export const client=sanityClient({
    projectId: "3a6b7at5",
    dataset:'production',
    apiVersion: 'v1',
    token: "skOqw91Lh2144Ej5ysc2Ne8q4sCJQ3hFIkN9WyORjlMqel8OCWKzBZ4Q197zFSzTplNfbt1NzE9at5OjdmxfvTQ6AjKuWLgrduld2VvXxc2Xela0vE9yv1Wyeo83TrrX6onu1XMbLGD7uAAxk2EggzvuMgQhS2BwI9kIZGXeKioksEBXmlqD",
    useCdn:false,
})