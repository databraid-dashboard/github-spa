[ ![Codeship Status for databraid-dashboard/github-spa](https://app.codeship.com/projects/f0227430-83cf-0135-7c1f-06f0d61a31a7/status?branch=master)](https://app.codeship.com/projects/247365)

# Github SPA

The aim of the Github SPA is to present actions and issues that need to be surfaced for a specific Repository within an Organization.  The application progresses through a Login, an Organization page, a Repository page, and then the final Widget view.  After login, only Organizations that are set to public are viewable in the Organizations page.  Once the user clicks the Organization of interest, active Repositories are displayed.  Once the user clicks the Repository of interest, the application transitions to the Widget view where active Pull Requests (PRs), Issues, and Milestones specific to that Repository are displayed.  If there are no active PRs, Issues, or Milestones, the Widget view will notify you of that.  

PRs and Issues are displayed in order of most recently submitted.  For PRs, the application displays the title, the date created, submitted by, and if merge conflicts exist.  For Issues, the issue number, issue title, to whom the issue was assigned, and any labels associated with the issue.  For Milestones, the application displays the title of the milestone, the due date if it exists, and what percentage of the milestone is complete.  

On each view there is the option to step back to the previous view or to logout and login under a different account.  

[![Screen_Shot_2017-09-25_at_2.41.53_PM.png](https://s26.postimg.org/6uyi4508p/Screen_Shot_2017-09-25_at_2.41.53_PM.png)](https://postimg.org/image/z7tzullyt/)

[![Screen_Shot_2017-09-25_at_2.41.12_PM.png](https://s26.postimg.org/wrs6gr3w9/Screen_Shot_2017-09-25_at_2.41.12_PM.png)](https://postimg.org/image/9dk74tlyt/)

[![Screen_Shot_2017-09-25_at_2.41.22_PM.png](https://s26.postimg.org/ubqd2wltl/Screen_Shot_2017-09-25_at_2.41.22_PM.png)](https://postimg.org/image/gutek1bhx/)

[![Screen_Shot_2017-09-25_at_2.41.38_PM.png](https://s26.postimg.org/sxyq7lmk9/Screen_Shot_2017-09-25_at_2.41.38_PM.png)](https://postimg.org/image/ym50yhqwl/)
