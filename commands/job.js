module.exports = {
  name: "job",
  execute({ user }) {
    return `Current job: ${user.job || "None"}. Set with: setjob <name>.`;
  }
};