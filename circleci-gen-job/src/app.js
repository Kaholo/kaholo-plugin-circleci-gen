const {getDockerImages, getResourceClasses} = require('./autocomplete')
const {createBranchesFilter,createTagsFilter} = require('./workflow-filters')

async function createJob(action){
  return {
    type : "job",
    data :{
      name : action.params.name,
      environment: action.params.environment,
      workingDirectory: action.params.workingDirectory,
      dockerImage: action.params.dockerImage ? (action.params.dockerImage.id || action.params.dockerImage) : undefined,
      resourceClass: action.params.resourceClass ? (action.params.resourceClass.id || action.params.resourceClass) : undefined,
    }
  }
}

async function createWorkflowJob(action){
  return {
    type : "workflow-job",
    data :{
      workflow : action.params.workflow,
      job: action.params.job
    }
  }
}



module.exports = {
  createJob,
  createWorkflowJob,
  // autocomplete
  getDockerImages,
  getResourceClasses,
  // workflow filters
  createBranchesFilter,
  createTagsFilter
};