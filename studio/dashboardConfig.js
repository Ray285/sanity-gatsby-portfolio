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
                  buildHookId: '5e7682e1fab062e6aadfb8b4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-xxfdwarw',
                  apiId: '8ade1410-41bd-46a1-8640-2c69c49224e0'
                },
                {
                  buildHookId: '5e7682e14fee5d15a3560fd6',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-mnb2gctf',
                  apiId: '772cd380-3acc-40e2-be4f-54e38d17fbbc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Ray285/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-mnb2gctf.netlify.com',
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
