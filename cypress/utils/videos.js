// function to recreate videos urls generated by Cypress default behavior
exports.createVideoUrl = (runnable, specName) => {
  return `videos${specName}.mp4`
}
