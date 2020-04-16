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
                  buildHookId: '5e9872b9a20b74fce971b774',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-gm1jtizq',
                  apiId: 'b9c46afb-decc-4e5e-96e1-8877051ed5fc'
                },
                {
                  buildHookId: '5e9872bad16bb073d7fe4174',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-x4k3akix',
                  apiId: '18329b05-a165-4034-a94a-1f2be8131190'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/worldoflinux/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-x4k3akix.netlify.app',
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
