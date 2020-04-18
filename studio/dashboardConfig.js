export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5e9b3cff6446edbbf99885a1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-tove-studio',
                  apiId: '04f1bc5a-69d9-4905-8e5c-209b9b58291a'
                },
                {
                  buildHookId: '5e9b3cff405f0dd5b95882c2',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-tove',
                  apiId: '2af46ab2-434d-4768-8af1-b62f8fc54344'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sportyfred/sanity-gatsby-tove',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-tove.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
