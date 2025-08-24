import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: {
      owner: 'alperenatici',
      name: 'uppsydigital'
    }
  },
  ui: {
    brand: {
      name: 'Uppsy Digital CMS'
    }
  },
  collections: {
    posts: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({
          label: 'Description',
          multiline: true
        }),
        publishedDate: fields.date({ label: 'Published Date' }),
        featured: fields.checkbox({
          label: 'Featured Post'
        }),
        image: fields.image({
          label: 'Featured Image',
          directory: 'src/assets/posts',
          publicPath: '/src/assets/posts/'
        }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'src/assets/posts',
            publicPath: '/src/assets/posts/'
          }
        })
      }
    }),
    projects: collection({
      label: 'Projects',
      slugField: 'title',
      path: 'src/content/projects/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({
          label: 'Description',
          multiline: true
        }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Web Development', value: 'web' },
            { label: 'Mobile App', value: 'mobile' },
            { label: 'Digital Marketing', value: 'marketing' },
            { label: 'Branding', value: 'branding' }
          ],
          defaultValue: 'web'
        }),
        featured: fields.checkbox({
          label: 'Featured Project'
        }),
        image: fields.image({
          label: 'Project Image',
          directory: 'src/assets/projects',
          publicPath: '/src/assets/projects/'
        }),
        url: fields.url({ label: 'Project URL' }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'src/assets/projects',
            publicPath: '/src/assets/projects/'
          }
        })
      }
    }),
    services: collection({
      label: 'Services',
      slugField: 'title',
      path: 'src/content/services/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({
          label: 'Description',
          multiline: true
        }),
        icon: fields.text({ label: 'Icon Name' }),
        featured: fields.checkbox({
          label: 'Featured Service'
        }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true
        })
      }
    })
  },
  singletons: {
    settings: singleton({
      label: 'Site Settings',
      path: 'src/content/settings',
      schema: {
        siteTitle: fields.text({ label: 'Site Title' }),
        siteDescription: fields.text({
          label: 'Site Description',
          multiline: true
        }),
        logo: fields.image({
          label: 'Logo',
          directory: 'src/assets/global',
          publicPath: '/src/assets/global/'
        }),
        socialLinks: fields.object({
          twitter: fields.url({ label: 'Twitter URL' }),
          linkedin: fields.url({ label: 'LinkedIn URL' }),
          instagram: fields.url({ label: 'Instagram URL' }),
          facebook: fields.url({ label: 'Facebook URL' })
        })
      }
    }),
    homepage: singleton({
      label: 'Homepage',
      path: 'src/content/homepage',
      schema: {
        heroTitle: fields.text({ label: 'Hero Title' }),
        heroDescription: fields.text({
          label: 'Hero Description',
          multiline: true
        }),
        heroImage: fields.image({
          label: 'Hero Image',
          directory: 'src/assets/global',
          publicPath: '/src/assets/global/'
        }),
        aboutTitle: fields.text({ label: 'About Section Title' }),
        aboutDescription: fields.text({
          label: 'About Description',
          multiline: true
        })
      }
    })
  }
});
