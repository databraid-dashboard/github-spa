[ ![Codeship Status for databraid-dashboard/github-spa](https://app.codeship.com/projects/f0227430-83cf-0135-7c1f-06f0d61a31a7/status?branch=master)](https://app.codeship.com/projects/247365)

# Github SPA

## Description

The aim of the Github SPA is to present actions and issues that need to be surfaced for a specific Repository within an Organization.  The application progresses through a Login, an Organization page, a Repository page, and then the final Widget view.  After login, only Organizations that are set to public are viewable in the Organizations page.  Once the user clicks the Organization of interest, active Repositories are displayed.  Once the user clicks the Repository of interest, the application transitions to the Widget view where active Pull Requests (PRs), Issues, and Milestones specific to that Repository are displayed.  If there are no active PRs, Issues, or Milestones, the Widget view will notify you of that.  

PRs and Issues are displayed in order of most recently submitted.  For PRs, the application displays the title, the date created, submitted by, and if merge conflicts exist.  For Issues, the issue number, issue title, to whom the issue was assigned, and any labels associated with the issue.  For Milestones, the application displays the title of the milestone, the due date if it exists, and what percentage of the milestone is complete.  

On each view there is the option to step back to the previous view or to logout and login under a different account.  

<img width="358" alt="screen shot 2017-09-25 at 2 41 53 pm" src="https://user-images.githubusercontent.com/12532173/30833027-2c5e0c86-a202-11e7-89c4-b8e776b81bc1.png">

<hr>

<img width="588" alt="screen shot 2017-09-25 at 2 41 12 pm" src="https://user-images.githubusercontent.com/12532173/30833040-3d2d547c-a202-11e7-8024-63c7b022ab2c.png">

<hr>

<img width="585" alt="screen shot 2017-09-25 at 2 41 22 pm" src="https://user-images.githubusercontent.com/12532173/30833066-517bcd0a-a202-11e7-963e-667bb0be19c6.png">

<hr>

<img width="700" alt="screen shot 2017-09-25 at 2 41 38 pm" src="https://user-images.githubusercontent.com/12532173/30833079-63cf64ee-a202-11e7-9089-991bda4654ed.png">

## Usage

- Ensure you have Docker installed. If not, you can download Docker [here](https://www.docker.com/community-edition).
- Fork and clone this repository.
- Run `npm install`.
- Run `npm start`.