State = {
 users : {
   ids: [],
   usersByID: {}
 },
 orgs: {
   ids: [],
   orgsById: { },
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
   repoID :{
     ids: [],
     milestonesById: {},
   }
  },
  loadingIssues: false;
};
