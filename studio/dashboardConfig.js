export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e0799951bf48eb4593d068c',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-6gf5nex9',
                  apiId: '1e067f78-3d0f-431d-ab5f-26735a0efeaa'
                },
                {
                  buildHookId: '5e07999530331ed1337dbb18',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-97wgjvfg',
                  apiId: '5ef98ba8-b478-46f6-a1e5-b43f4b1f1403'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ccalvarez/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-97wgjvfg.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
