# circle-ci-gen-step
CircleCI yml generator for jobs steps.


## Method: Run step

**Description:**

Create a new run command step

**Parameters:**

* Job name - the name of the job to add the step to.
* Working Directory - working directory path
* Command - the commands to run (one per line)


## Method: Checkout step

**Description:**

Create a new git checkout step

**Parameters:**

* Job name - the name of the job to add the step to.


## Method: Save Cache step

**Description:**

Create a new cache save command step

**Parameters:**

* Job name - the name of the job to add the step to.
* Key - the cache key to use
* Paths - the paths to cache (one per line)


## Method: Restore Cache step

**Description:**

Create a new cache restore step

**Parameters:**

* Job name - the name of the job to add the step to.
* Key - The cache key to restore