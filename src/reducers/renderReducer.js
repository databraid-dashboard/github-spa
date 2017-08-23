
import {
<<<<<<< HEAD
<<<<<<< HEAD
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

<<<<<<< HEAD
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
=======
const renderPage = (state = { render: 'login', repoName: null, userName: 'michaelmurray6298', selectedOrgName: null }, action) => {
>>>>>>> 8213532... Frontend/Backend sync
  switch (action.type) {
    case RENDER_ORGS:
      return { ...state, render: 'orgs', userName: 'michaelmurray6298' };
=======
  RENDER_ORGS, RENDER_REPOS, RENDER_LOGIN, RENDER_ORGS_FULLFILLED, RENDER_ORGS_PENDING, RENDER_ORGS_REJECTED, RENDER_DASHBOARD,
=======
   RENDER_REPOS, RENDER_LOGIN, RENDER_DASHBOARD, GET_USERNAME
>>>>>>> 4b55b56... Fixed merge conflict iwth Oauth feature, need to ipull down latest
} from '../actions/renderActions';

const renderPage = (state = { render: 'login', repoName: null, fetching: true, userName: '', selectedOrgName: null, session: {} }, action) => {
  switch (action.type) {
<<<<<<< HEAD
    case RENDER_ORGS_FULLFILLED:
    console.log('username in RENDER_ORGS_FULLFILLED reducer', action.payload);
      return { ...state, render: 'orgs',  userName: action.payload.session.passport.user._json.login , fetching: false};
    case RENDER_ORGS_PENDING:
      return { ...state, fetching: true};
    case RENDER_ORGS_REJECTED:
      return { ...state, };  // NOTE handle error flow
>>>>>>> 18ae6cd... Played with render action, reducer login component and store, all..day...

    case RENDER_REPOS:
      return { ...state, render: 'repos', selectedOrgName: action.selectedOrgName };
>>>>>>> 4bf6324... Adding some api calls
=======
    case GET_USERNAME:
    return {...state, userName : action.userName, render: 'orgs'};
    case RENDER_REPOS:
      return { ...state, render: 'repos', fetching: false, selectedOrgName: action.selectedOrgName};
>>>>>>> 4b55b56... Fixed merge conflict iwth Oauth feature, need to ipull down latest

    case RENDER_LOGIN:
      return { ...state, render: 'login', fetching: false};

    case RENDER_DASHBOARD:
<<<<<<< HEAD
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
<<<<<<< HEAD
>>>>>>> 979ef55... editing .gitignore
        repoName: action.repoName };
>>>>>>> 79473f9... Fixed linting errors, installed redux-mock-store
=======
      return { ...state, render: 'dashboard',
<<<<<<< HEAD
        repoName: action.repoName , session: {...action.payload.session.passport.user}, fetching: false};
>>>>>>> b8942b0... exploring Oauth hookup not finished, will need to accept sandeep's next update to sync
=======
=======
      return { ...state,
        render: 'dashboard',
>>>>>>> 8213532... Frontend/Backend sync
        repoName: action.repoName,
=======
        repoName: action.repoName , fetching: false, repoName: action.repoName,
>>>>>>> 4b55b56... Fixed merge conflict iwth Oauth feature, need to ipull down latest
        repoId: action.repoId };
>>>>>>> e19f169... Adding syced app

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
