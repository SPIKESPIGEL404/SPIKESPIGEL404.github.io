import { config, collection, singleton, fields } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },

  ui: {
    brand: { name: 'kelsenliu.com' },
  },

  singletons: {
    home: singleton({
      label: 'Home',
      path: 'content/pages/home',
      format: { contentField: 'content' },
      schema: {
        name: fields.text({ label: 'Name', defaultValue: 'Kelsen Liu' }),
        tagline: fields.text({ label: 'Tagline', defaultValue: 'Building things on the internet' }),
        bio: fields.text({
          label: 'Bio',
          multiline: true,
        }),
        links: fields.array(
          fields.object({
            label: fields.text({ label: 'Label' }),
            url: fields.url({ label: 'URL' }),
          }),
          {
            label: 'Links',
            itemLabel: (p) => p.fields.label.value || 'New Link',
          }
        ),
        content: fields.markdoc({
          label: 'Body',
          options: {
            bold: true,
            italic: true,
            link: true,
            code: true,
            heading: [2, 3, 4],
            blockquote: true,
            orderedList: true,
            unorderedList: true,
          },
        }),
      },
    }),

    about: singleton({
      label: 'About',
      path: 'content/pages/about',
      format: { contentField: 'content' },
      schema: {
        title: fields.text({ label: 'Title', defaultValue: 'About' }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            bold: true,
            italic: true,
            link: true,
            heading: [2, 3],
          },
        }),
      },
    }),
  },

  collections: {
    posts: collection({
      label: 'Writing',
      path: 'content/posts/*',
      slugField: 'title',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        date: fields.date({ label: 'Date' }),
        description: fields.text({ label: 'Description', multiline: false }),
        draft: fields.checkbox({ label: 'Draft', defaultValue: false }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            bold: true,
            italic: true,
            link: true,
            code: true,
            heading: [2, 3, 4],
            blockquote: true,
            orderedList: true,
            unorderedList: true,
            image: {
              directory: 'public/images/posts',
              publicPath: '/images/posts',
            },
          },
        }),
      },
    }),

    projects: collection({
      label: 'Projects',
      path: 'content/projects/*',
      slugField: 'name',
      format: { contentField: 'content' },
      schema: {
        name: fields.slug({ name: { label: 'Name' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        status: fields.select({
          label: 'Status',
          options: [
            { label: 'Active', value: 'active' },
            { label: 'Archived', value: 'archived' },
          ],
          defaultValue: 'active',
        }),
        github: fields.url({ label: 'GitHub URL' }),
        live: fields.url({ label: 'Live URL' }),
        content: fields.markdoc({
          label: 'Details',
          options: {
            bold: true,
            italic: true,
            link: true,
            code: true,
            heading: [3, 4],
          },
        }),
      },
    }),
  },
});
