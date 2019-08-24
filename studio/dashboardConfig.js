export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d6120b7affbcd10bd2e7883',
                  title: 'Sanity Studio',
                  name: 'vcyork-sanity-sapper-studio',
                  apiId: 'd29b2eb8-2ba3-407a-8360-1170d64b98d3'
                },
                {
                  buildHookId: '5d6120b7d4a6d286be86dae7',
                  title: 'Blog Website',
                  name: 'vcyork-sanity-sapper',
                  apiId: '1ddba703-dc5a-4d71-a11c-794527c0a38d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/peterjlambert/vcyork-sanity-sapper',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://vcyork-sanity-sapper.netlify.com', category: 'apps'}
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
