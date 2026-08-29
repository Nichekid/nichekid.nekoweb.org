export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./src/images");
    eleventyConfig.addPassthroughCopy("./src/font");
    eleventyConfig.addPassthroughCopy("./src/backgrounds");
    eleventyConfig.addPassthroughCopy("./src/mp3");
    eleventyConfig.addPassthroughCopy("./src/art");
    eleventyConfig.addPassthroughCopy("./src/js");
  return {
    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
    },
  };

  

}