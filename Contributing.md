# How to Contribute

- Take a look at the existing [Issues](https://github.com/hellodeborahuk/phonics-sounds/issues) or create a new issue.
- [Fork the Repo](https://github.com/hellodeborahuk/phonics-sounds/fork). Then, create a branch for any issue that you are working on. Finally, commit your work.
- Create a pull request.
- Add screenshots or screen captures to your Pull Request to help me understand the effects of the changes proposed in your PR.

## HOW TO MAKE A PULL REQUEST:

**1.** Start by making a fork the [**phonics-sounds**](https://github.com/hellodeborahuk/phonics-sounds) repository. Click on the <a href="https://github.com/hellodeborahuk/phonics-sounds/fork"><img src="https://i.imgur.com/G4z1kEe.png" height="21" width="21"></a> symbol at the top right corner.

**2.** Clone your new fork of the repository:

```bash
git clone https://github.com/<your-github-username>/phonics-sounds
```

**3.** Set upstream command:

```bash
git remote add upstream https://github.com/hellodeborahuk/phonics-sounds.git
```

**4.** Navigate to the new project directory:

```bash
cd LinkFree
```

**5.** Create a new branch:

```bash
git checkout -b YourBranchName
```

**6.** Sync your fork or your local repository with the origin repository:

- In your forked repository, click on "Fetch upstream"
- Click "Fetch and merge"

### Alternatively, Git CLI way to Sync forked repository with origin repository:

```bash
git fetch upstream
```

```bash
git merge upstream/main
```

### [Github Docs](https://docs.github.com/en/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github) for Syncing

**7.** Make your changes to the source code.

**8.** Stage your changes and commit:

```bash
git add public
```

```bash
git commit -m "<your_commit_message>"
```

**9.** Push your local commits to the remote repository:

```bash
git push origin YourBranchName
```

**10.** Create a [Pull Request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)!


**After this, I will review the PR and merge it if it helps move the project forward. Otherwise, it will be given constructive feedback and suggestions for the changes needed to add the PR to the codebase.**