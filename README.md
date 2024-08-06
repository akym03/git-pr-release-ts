# git-pr-release-ts

> A GitHub App built with [Probot](https://github.com/probot/probot) that Create a \&quot;release pull request\&quot;

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Docker

```sh
# 1. Build container
docker build -t git-pr-release-ts .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> git-pr-release-ts
```

## Contributing

If you have suggestions for how git-pr-release-ts could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2024 masahiro akiyama
