import core from '@actions/core'

class Input {
  constructor(
    readonly dryRun = false,
    readonly showJson = false,
    readonly squashed = false,
    readonly overwriteDescription = false
  ) {}
}

function getInput(): Input {
  // Returns all the inputs that dosen't need a merge with the config file

  return new Input(
    core.getInput('dryRun').toLowerCase() === 'true',
    core.getInput('showJson').toLowerCase() === 'true',
    core.getInput('squashed').toLowerCase() === 'true',
    core.getInput('overwriteDescription').toLowerCase() === 'true'
  )
}
