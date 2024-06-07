const core = require('@actions/core')
const github = require('@actions/github')
const fs = require('fs')
const semver = require('semver')

;(async () => {
    try {
        // Check Tag
        if (!github.context.ref.startsWith('refs/tags/')) {
            return core.info(`Skipping due to no tag: ${github.context.ref}`)
        }
        // console.log('ref:', github.context.ref)
        // const parsedTag = github.context.ref.replace('refs/tags/', '')
        // console.log('parsedTag:', parsedTag)
        // const version = semver.clean(parsedTag)
        // console.log('semver:', version)

        // Process Inputs
        const inputFile = core.getInput('file')
        console.log('file:', inputFile)
        const inputVersion = core.getInput('version')
        console.log('version:', inputVersion)
        console.log('version:', typeof inputVersion)
        const version = semver.clean(inputVersion)
        console.log('semver:', version)

        // // Set Variables
        // const { owner, repo } = github.context.repo
        // console.log('owner:', owner)
        // console.log('repo:', repo)
        // const sha = github.context.sha
        // console.log('sha:', sha)
    } catch (e) {
        core.debug(e)
        core.info(e.message)
        core.setFailed(e.message)
    }
})()
