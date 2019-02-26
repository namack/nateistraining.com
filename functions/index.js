const github = require('octonode')
const moment = require('moment')

exports.generateWorkoutMarkdown = (req, res) => {
  const client = github.client(process.env.GITHUB_TOKEN)
  const repo = client.repo('namack/nateistraining.com')
  const date = moment().format('YYYY-MM-DD')
  const dummyContent = `
---
date: "${date}"
title: "Testing the webhook"
categories:
  - Run
---

## This is a test
I am testing out this side of the cloud function to see if I can easily
generate markdown files and insert them into the repo.
  `.trim()

  const callback = function(...args) {
    res.send({ args })
  }

  repo.createContents(`blog/${date}/test2.mdx`, 'testing cloud function', dummyContent, 'master', callback)
}
