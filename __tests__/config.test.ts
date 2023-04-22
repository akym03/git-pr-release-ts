import {getConfig} from '../src/lib/config'
import {Github, context} from '@actions/github'
import {WebhookPayload} from '@actions/github/lib/interfaces'

test('return defaults', async () => {
  const fakePayload: WebhookPayload = {
    action: 'opened'
  }

  context.payload = fakePayload

  const reqContext = {
    payload: {
      repository: {
        default_branch: 'master'
      }
    },
    eventName: 'testOfReturnDefaults',
    sha: '1234567',
    ref: 'main',
    workflow: 'example-workflow',
    action: 'push',
    actor: 'alice',
    job: '#1',
    runNumber: 1,
    runId: 'abc123',
    apiUrl: 'https://api.example.com/api',
    serverUrl: 'https://server.example.com',
    graphqlUrl: 'https://graphql.example.com/endpoint',
    log: {info: jest.fn(), warn: jest.fn()}
  }

  const config = await getConfig(reqContext)

  expect(config).toEqual({
    template: '$CHANGES',
    references: ['master']
  })
})
