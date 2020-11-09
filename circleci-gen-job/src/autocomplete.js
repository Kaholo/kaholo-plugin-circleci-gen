async function getDockerImages(query) {
  let images = require("./data/docker-image-tags.json");
  if (query) {
    images = images.filter((image) => image.id.includes(query));
  }
  return images.slice(0, 20);
}

async function getResourceClasses(query) {
  const availableResourceClasses = [
    "small",
    "medium",
    "medium+",
    "large",
    "xlarge",
    "2xlarge",
    "2xlarge+",
  ];

  return availableResourceClasses
    .filter((cl) => cl.includes(query))
    .map((cl) => {
      return { id: cl, value: cl };
    });
}

module.exports = {
    getDockerImages,
    getResourceClasses
}
