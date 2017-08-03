State = {
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
  },
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
};
