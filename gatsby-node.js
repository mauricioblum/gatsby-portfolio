const { profile } = require('./src/config/data');

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions;

  const node = {
    id: createNodeId(`profile-info`),
    name: profile.name,
    job: profile.job,
    email: profile.email,
    links: profile.links,
    internal: {
      type: `Profile`,
      contentDigest: createContentDigest(profile),
    },
  };

  createNode(node);
};
