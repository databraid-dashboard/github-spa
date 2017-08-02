export const initialState = {
  users : {
    ids: [],
    usersByID: {}
  },
  orgs: {
    ids: [],
    orgsByID: {
      id: int,
      repo: repository,
      url: repos_url,

    },
  },
  repos : {
    ids: [],
    reposById: {
      4567: {
      issues : {
        labels : [],
        assignedTo : [],
        milestones: [],
        }
      },
      pullRequests: {

      },
      milestones : {

      },
    }


  }
};
