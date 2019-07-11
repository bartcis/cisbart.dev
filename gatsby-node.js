const path = require(`path`)
const postsQuery = `
{
  blog {
    blogPosts {
      id
      slug
      status
      tags
    }
  }
}`
const pagesQuery = `
{
  blog {
    blogPages {
      id
      slug
      status
    }
  }
}`

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    graphql(postsQuery)
    .then(result => {
      if (result.errors) {
        reject(result.errors);
      }
      result.data.blog.blogPosts.map( a => {
        if (a.status === 'PUBLISHED') {
          createPage({
            path: `/${a.slug}/`,
            component: path.resolve(`./src/templates/postTemplate.tsx`),
            context: {
              id: a.id,
            },
          });
        }
      });
      // Separete tags and generate page for each
      function processTags(tags) {
        let fullTagList = [];
        let tagList = [];
        let uniqueList = [];

        tags.map(array => {
          fullTagList.push(array.tags);
        });

        fullTagList.map(array => {
          for (let tag of array) {
            tagList.push(tag);
          }
        });

        tagList.sort().map((a, i) => {
          if (a !== tagList[i + 1]) {
            uniqueList.push(a.toLowerCase());
          }
        });

        return uniqueList;
      }
      processTags(result.data.blog.blogPosts).map((a,i) => {
        createPage({
          path: `/${a}/`,
          component: path.resolve(`./src/templates/tagTemplate.tsx`),
          context: {
            id: a,
          },
        });
      });
    })
    .then(() => {
      graphql(pagesQuery)
      .then(result => {
        if (result.errors) {
          reject(result.errors);
        }
        result.data.blog.blogPages.map( a => {
          createPage({
            path: `/${a.slug}/`,
            component: path.resolve(`./src/templates/pageTemplate.tsx`),
            context: {
              id: a.id,
            },
          });
        });
        resolve();
      })
    })
  });
};
