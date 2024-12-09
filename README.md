# README

## Quickstart

with Github actions and a boilerplate project structure we can get started right away

***
1. If not done already clone this repository to your machine
2.  Create a new Github repository (required for Github Actions)
3. In your new repository's settings, navigate to "Settings", "Secrets & Variables", "Actions", "New Repository Secret"
4. Generate a Checkly API key and save it as a secret called CHECKLY_API_KEY. Then follow the same process createing another secret for your Checkly account ID called CHECKLY_ACCOUNT_ID.
	** click [here](https://www.checklyhq.com/docs/accounts-and-users/creating-api-key/) for help creating an API key and locating Account ID 
5. Customize the alert channel with your email on line 7 of ```alert-channels.ts```
7. Push to the remote repository eg.
	 ```bash
	 git remote add <remote_name> <remote_url>
	 git checkout -b trunk
	 git push --set-upstream <remote_name> trunk
	 ```
8. That's it!! Try adding a check to the __checks__ directory. After pushing your code the check should appear in your Checkly dashboard and will notify you at your email address.



# How Does it Work?
configuring Checkly to meet your application's needs
***

## Configuring the CLI with test and check match

Checkly allows configuration through a project construct. See ```checkly.config.ts```.

On line 28 the attribute checkMatch is defined

```checkMatch:  '**/__checks__/**/*.check.ts'```

and on line 35 the property testMatch is defined

```testMatch:  '**/__checks__/**/*.spec.ts'```

These specify glob patterns the CLI uses to check for **Check Constructs** and **Playwright Tests** respectively.

Right now these patterns point the CLI to anything in a ``__checks__`` directory **anywhere** in the codebase but the behavior can be tailored to your application setup by modifying the patterns.


## Alert Channels As Code
Checkly entities can be created, modified and configured through code as **constructs**. 

These are just Javascript/Typescript objects fulfilling some class.

As part of the template in ```alert-channels-ts```  a new instance of ```emailAlertChannel``` is created.

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
asldkjfl;adsjf