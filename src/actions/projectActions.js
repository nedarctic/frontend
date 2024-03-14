// projectActions.js

// Action types
export const FETCH_PROJECTS_REQUEST = 'FETCH_PROJECTS_REQUEST';
export const FETCH_PROJECTS_SUCCESS = 'FETCH_PROJECTS_SUCCESS';
export const FETCH_PROJECTS_FAILURE = 'FETCH_PROJECTS_FAILURE';

// Action creators
export const fetchProjectsRequest = () => ({
  type: FETCH_PROJECTS_REQUEST,
});

export const fetchProjectsSuccess = (projects) => ({
  type: FETCH_PROJECTS_SUCCESS,
  payload: projects,
});

export const fetchProjectsFailure = (error) => ({
  type: FETCH_PROJECTS_FAILURE,
  payload: error,
});

// Async action creator
export const fetchProjects = () => {
  return async (dispatch) => {
    dispatch(fetchProjectsRequest());
    try {
      // Perform API call to fetch projects
      const response = await fetch('http://localhost:8000/api/v1/');
      if (!response.ok) {
        throw new Error('Failed to fetch projects');
      }
      const data = await response.json();
      // Dispatch success action with fetched projects data
      dispatch(fetchProjectsSuccess(data));
    } catch (error) {
      // Dispatch failure action if an error occurs
      dispatch(fetchProjectsFailure(error));
    }
  };
};

