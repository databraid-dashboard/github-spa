export const initialState = {
  users : {
    id: [],
    usersByID: {}
  },
  orgs: {
    id: [],
    orgsByID: {},
  },
  repos : {
    ids: [],
    reposById: {
      issues : {
        labels : [],
        assignedTo : [],
        milestones: [],

      },
      pullRequests: {

      },
      milestones : {

      },
    }


  }
};
