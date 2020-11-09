async function checkoutStep(action) {
  return createStep(action.params.job,'checkout');  
}

async function restoreCacheStep(action) {
  return createStep(action.params.job,'restore_cache',[
    {key : "key", value: action.params.key}
  ]);  
}

async function saveCacheStep(action) {
  const paths = (action.params.paths || "").split('\n');
  
  return createStep(action.params.job,'save_cache',[
    {key : "key", value: action.params.key},
    {key: "paths", value: paths}
  ]);    
}

async function runStep(action) {
  const commands = (action.params.command || "").split('\n');

  return createStep(action.params.job,'run',[
    {key : "working_directory", value: action.params.workingDir},
    {key : "command", value: commands.join(' && ')},
  ]);  
}


function createStep(job, type, params){
  if(!job)
    throw "You must specify job"
  
  return {
    type : "step",
    data : {
      job,
      step_options: {
        type,
        params : params || []
      }
    }
  }
}

module.exports = {
  checkoutStep,
  restoreCacheStep,
  saveCacheStep,
  runStep
};