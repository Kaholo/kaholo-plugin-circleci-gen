# circle-ci-gen-job
CircleCI yml generator for jobs and jobs related entites (jobs, workflow jobs, workflow job filters)


## Method: Create Job

**Description:**

Create a new job

**Parameters:**

* Job name - the name of the job
* Environment - Enviorment variables (one per line)
* Working Directory - working directory path
* Docker Image (Autocomplete) - docker image to use for execution
* Resource Class (Autocomplete) - the size of the docker image to use (default: medium)


## Method: Create Workflow Job

**Description:**

Adds a job to a workflow. If workflow doesn't exists it will automatically be created.

**Parameters:**

* Workflow - the name of the workflow. If workflow doesn't exists it will get automatically created.
* Job - the name of the job.


## Method: Job Branches Filter

**Description:**

Adds a branches filter to the workflow job.

**Parameters:**

* Workflow - the name of the workflow.
* Job - the name of the job.
* Only - only branches to include 
* Ignore - branches to ignore


## Method: Job Tags Filter

**Description:**

Adds a tags filter to the workflow job.

**Parameters:**

* Workflow - the name of the workflow.
* Job - the name of the job.
* Only - only tags to include 
* Ignore - tags to ignore