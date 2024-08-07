import { Probot } from "probot";
import {Context}  from 'probot/lib';

export default (app: Probot) => {
  app.on("push", async (_context: Context) => {

    // TODO checking arguments
    // https://github.com/x-motemen/git-pr-release/blob/4c547de55eeb65a068b5fd1ab2be93f64f3fc061/lib/git/pr/release/cli.rb#L24

    // TODO Set up configuration
    // https://github.com/x-motemen/git-pr-release/blob/4c547de55eeb65a068b5fd1ab2be93f64f3fc061/lib/git/pr/release/cli.rb#L42C11-L42C35

    // TODO Create or update release PR
    // https://github.com/x-motemen/git-pr-release/blob/4c547de55eeb65a068b5fd1ab2be93f64f3fc061/lib/git/pr/release/cli.rb#L52C15-L53C1

  });
  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
