import promise from 'redux-promise-middleware';
import {
<<<<<<< HEAD
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
=======
  RENDER_ORGS, RENDER_REPOS, RENDER_LOGIN, RENDER_DASHBOARD,
} from '../actions/renderActions';

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const renderPage = (state = 'orgs', action) => {
>>>>>>> b56b9a4... Adding conditional views
=======
const renderPage = (state = {render: 'orgs', repoName:null }, action) => {
>>>>>>> 564c283... Fixing warning messages from tests
=======
const renderPage = (state = { render: 'login', repoName: null }, action) => {
>>>>>>> 79473f9... Fixed linting errors, installed redux-mock-store
=======
const renderPage = (state = { render: 'login', repoName: null, fetching: true }, action) => {
>>>>>>> b8942b0... exploring Oauth hookup not finished, will need to accept sandeep's next update to sync
  switch (action.type) {
    case RENDER_ORGS:
      return { ...state, render: 'orgs', session: {...action.payload.session.passport.user }, fetching: false};

    case RENDER_REPOS:
      return { ...state, render: 'repos', session: {...action.payload.session.passport.user }, fetching: false;
=======
const renderPage = (state = { render: 'login', repoName: null, userName: 'michaelmurray6298', selectedOrgName: null, }, action) => {
  switch (action.type) {
    case RENDER_ORGS:
      return { ...state, render: 'orgs', userName: 'michaelmurray6298' };

    case RENDER_REPOS:
      return { ...state, render: 'repos', selectedOrgName: action.selectedOrgName };
>>>>>>> 4bf6324... Adding some api calls

    case RENDER_LOGIN:
      return { ...state, render: 'login' , session: {...action.payload.session.passport.user}, fetching: false};

    case RENDER_DASHBOARD:
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      return state = 'dashboard';
<<<<<<< HEAD
  }
};
>>>>>>> edbe0e0... fml
=======
=======
      return {render: 'dashboard',
              repoName: action.repoName}
>>>>>>> 564c283... Fixing warning messages from tests
=======
      return { render: 'dashboard',
=======
      return { ...state, render: 'dashboard',
>>>>>>> 979ef55... editing .gitignore
        repoName: action.repoName };
>>>>>>> 79473f9... Fixed linting errors, installed redux-mock-store
=======
      return { ...state, render: 'dashboard',
        repoName: action.repoName , session: {...action.payload.session.passport.user}, fetching: false};
>>>>>>> b8942b0... exploring Oauth hookup not finished, will need to accept sandeep's next update to sync

    default:
      return state;
  }
};

<<<<<<< HEAD
export default renderPage
>>>>>>> b56b9a4... Adding conditional views
=======
export default renderPage;
>>>>>>> 79473f9... Fixed linting errors, installed redux-mock-store
