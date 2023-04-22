import { context } from '@actions/github'

type GithubContext = typeof context;

type Config = {
    hasDryRun: boolean,
    hasJson: boolean,
    hasNoFetch: boolean,
    hasSquashed: boolean,
    nameTemplate: string,
};

async function getConfig( context: GithubContext, configName?: string  ) : Promise<Config> {
    const config: Config = {
        hasDryRun: false,
        hasJson: false,
        hasNoFetch: false,
        hasSquashed: false,
        nameTemplate: "",
    };

    return config
};


export {getConfig};

