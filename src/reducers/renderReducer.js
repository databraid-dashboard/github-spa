import {
<<<<<<< HEAD
  RENDER_ORGS, RENDER_REPOS, RENDER_LOGIN, RENDER_DASHBOARD
} from '../actions/renderActions';

<<<<<<< HEAD
const renderPage = (state = '', action) => {
  switch(action.type) {
=======
export const renderPage = (state = '', action) => {
  switch (action.type) {
>>>>>>> df38d77... Adding working orgs page
    case RENDER_ORGS:
      return state='orgs';

    case RENDER_REPOS:
      return state='repos';

    case RENDER_LOGIN:
      return state='login';

    case RENDER_DASHBOARD:
      return state='dashboard';
  }
}
=======
  RENDER_ORGS, RENDER_REPOS, RENDER_LOGIN, RENDER_DASHBOARD,
} from '../actions/renderActions';

const renderPage = (state = '', action) => {
  switch (action.type) {
    case RENDER_ORGS:
      return state = 'orgs';

    case RENDER_REPOS:
      return state = 'repos';

    case RENDER_LOGIN:
      return state = 'login';

    case RENDER_DASHBOARD:
      return state = 'dashboard';
  }
};
>>>>>>> edbe0e0... fml
