# README

## Quickstart

with Github actions and a boilerplate project structure we can get started right away

***

1.  Create a new Github repository (required for Github Actions)
2. In your new repository's settings, navigate to "Settings", "Secrets & Variables", "Actions", "New Repository Secret"
3. Generate a Checkly API key and save it as a secret called CHECKLY_API_KEY. Then follow the same process createing another secret for your Checkly account ID called CHECKLY_ACCOUNT_ID.
4. Push to the remote repository eg.
	 ```bash
	 git remote add <remote_name> <remote_url>
	 git add .
	 git commit -m "first commit"
	 git push --set-upstream <remote_name> trunk
	 ```
5. That's it!! Try adding a check to the __checks__ directory. After pushing your code the check should appear in your Checkly dashboard.



# How Does it Work?
configuring Checkly to meet your application's needs
***
