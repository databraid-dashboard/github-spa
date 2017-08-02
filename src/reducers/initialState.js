State = {
 users : {
   ids: [],
   usersByID: {}
 },
 orgs: {
   ids: [],
   orgsByID: {
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
   repoID :{
     ids: [],
     milestonesById: {},
   }
  },
};
