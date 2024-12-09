# README

## Quickstart

with [Github Actions](https://docs.github.com/en/actions) and a boilerplate project structure we can get started right away

***
1. If not done already clone this repository to your machine
		``` git clone https://github.com/niiiiiicckkkkkk/checkly-starter-templ.git```

		*** npm install will download dependencies
2.  [Create a new Github Repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository) (required for Github Actions)
3. In your new repository on the Github UI, navigate to "Settings", "Secrets & Variables", "Actions", "New Repository Secret"
4. Generate a Checkly API key and save it as a [secret](https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions) called CHECKLY_API_KEY. Then follow the same process createing another secret for your Checkly account ID called CHECKLY_ACCOUNT_ID.
	** click [here](https://www.checklyhq.com/docs/accounts-and-users/creating-api-key/) for help creating an API key and locating Account ID 
5. In your editor customize the alert channel with your email by completing the TODO on line 7 of ```alert-channels.ts```
6. Push to the remote repository eg.
	 ```bash
	 git remote add <remote_name> <your_new_repo_url>
	 git add .
	 git commit -m "customized template with my email"
	 git push --set-upstream <remote_name> trunk
	 ```
7. That's it!! Try adding a check to the \_\_checks\_\_ directory. After pushing your code the new or updated check should appear in your Checkly dashboard and will notify you of any failures at your email address.



# How Does it Work?
configuring Checkly to meet your application's needs
***

## Configuring the CLI with test and check match

Checkly allows configuration through a project construct. See ```checkly.config.ts```.

On line 28 the attribute checkMatch is defined

```checkMatch:  '**/__checks__/**/*.check.ts'```

and on line 35 the property testMatch is defined

```testMatch:  '**/__checks__/**/*.spec.ts'```

These specify **glob patterns** the CLI uses to check for [**Checkly Constructs**](https://www.checklyhq.com/docs/cli/constructs-reference/) and **[Playwright Tests](https://playwright.dev/docs/writing-tests)** respectively.

Right now these patterns point the CLI to anything in a ``__checks__`` directory anywhere in the codebase but the behavior can be tailored to your application setup by modifying the patterns.


## Alert Channels As Code
Checkly entities can be created, modified and configured through code as [**constructs**](https://www.checklyhq.com/docs/cli/constructs-reference/). 

These are just Javascript/Typescript objects fulfilling some class.

As part of the template in ```alert-channels-ts```  a new instance of [emailAlertChannel](https://www.checklyhq.com/docs/cli/constructs-reference/#emailalertchannel) is created.

```js
export  const  emailChannel  =  new  EmailAlertChannel('my-email-channel',  {
// TODO: fill in your email address
address:  "your email here",
sendFailure:  true,
sendRecovery:  true,
sendDegraded:  false,
sslExpiry:  true,
sslExpiryThreshold:  30
})
```
These work exactly like objects would in your application code. Export them, define functions to create them, map over lists of them etc.


## CI Integration

Checkly CI integration is very flexible but it is safe to assume a few requirements

1. To point new or modified [Checkly Constructs](https://www.checklyhq.com/docs/cli/constructs-reference/) to the correct account the environment variables should have a binding for CHECKLY_ACCOUNT_ID specified.
2. Similarly, to verify ownership of the account CHECKLY_API_KEY should also be bound.
3. Access to or ability to install node
4. Access to any new or modified Checks (this just becomes part of the source code). 


Most if not all CI and CD tools or platforms should meet these requirements and as a result Checkly should be fairly agnostic to the specifics of your CI/CD workflows.

To get an idea of how these requirements are met after each push through Github Actions see the commented file ```.github/workflows/deploy-checks.yaml```.

To get a sense of what other kinds of Checkly workflows are possible see the commented file ```examples/cloud-run.yaml```.

** note ```examples/cloud-run.yaml``` requires additional setup ie private location, Google Cloud project / credentials etc. As a result simply moving it to ```.github/workflows``` won't create a valid deployment pipeline.