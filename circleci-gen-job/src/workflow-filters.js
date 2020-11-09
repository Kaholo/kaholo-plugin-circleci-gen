
function createWorkflowJobFilter(filterName, workflow, job, filterOptions){
  return {
    type : "workflow-job-filter",
    data :{
      workflow : workflow,
      job: job,
      name: filterName,
      options: filterOptions
    }
  }
}


async function createBranchesFilter(action){
  const only = action.params.only ? action.params.only.split('\n') : undefined;
  const ignore = action.params.ignore ? action.params.ignore.split('\n') : undefined;
  
  const options = {
    only,
    ignore
  }

  return createWorkflowJobFilter('branches',action.params.workflow,action.params.job,options);
}

async function createTagsFilter(action){
  const only = action.params.only ? action.params.only.split('\n') : undefined;
  const ignore = action.params.ignore ? action.params.ignore.split('\n') : undefined;
  
  const options = {
    only,
    ignore
  }

  return createWorkflowJobFilter('branches',action.params.workflow,action.params.job,options);
}


module.exports = {
  createBranchesFilter,
  createTagsFilter,
};