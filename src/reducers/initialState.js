State = {
 users : {
   ids: [],
   usersById: {}
 },
 orgs: {
   ids: [],
   orgsById: {
     id: 0,
     repoIds: [],
     ...everything else related to an org
   },
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
  },
  loadingIssues: false;
};
