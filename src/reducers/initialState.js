State = {
<<<<<<< HEAD
  users : {
    ids: [],
    usersByID: {}
  },
  orgs: {
    ids: [],
    orgsByID: {
      id: {
        avatar_url: 'string',
        login: 'string',
        repos_url: 'string',
      // triggers another action that fetches call
      }
    
    },
=======
 users : {
   ids: [],
   usersById: {}
 },
 orgs: {
   ids: [],
<<<<<<< HEAD
   orgsById: {
     id: 0,
     repoIds: [],
     ...everything else related to an org
   },
=======
   orgsById: { },
>>>>>>> 88f4b03... Added passing tests on <Org and <Orgs
 },
 repos : {
   ids: [],
   reposById: {},
 }
 issues : {
     ids: [],
     issuesById: {},

 }
 pullRequests: {
     ids: [],
     prById: {},
  },
 milestones : {
   repoId :{
     ids: [],
     milestonesById: {},
   }
>>>>>>> 2c48835... Adding repo view
  },
<<<<<<< HEAD
  repos : {
    ids: [],
    reposById: {},
  }
  issues : {
    // repoID :{
      ids: [],
      issuesById: {},
    // }

  }
  pullRequests: {
    // repoID :{
      ids: [],
      prById: {},
    // }
   },
  milestones : {
    repoID :{
      ids: [],
      milestonesById: {},
    }
   },
=======
  loadingIssues: false;
>>>>>>> 8aab236... added loading bar and tests
};
