import { Probot } from "probot";
import {Context}  from 'probot/lib';

export default (app: Probot) => {
  app.on("issues.opened", async (context: Context) => {
    const issueComment = context.issue({
      body: "Thanks for opening this issue!",
    });
    await context.octokit.issues.createComment(issueComment);
  });
  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
