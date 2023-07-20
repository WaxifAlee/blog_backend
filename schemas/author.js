// schemas/author.js

export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // Enable this if you want to add hotspots to the image
      },
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text',
      description: 'A short bio of the author',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) =>
        Rule.regex(
          // Simple email validation using regex
          /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
        ).error('Invalid email address'),
    },
    {
      name: 'website',
      title: 'Website',
      type: 'url',
    },
    {
      name: 'github',
      title: 'Github',
      type: 'url',
    },
    {
      name: 'twitter',
      title: 'Twitter',
      type: 'url',
    },
  ],
}
