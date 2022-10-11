const isApiMockEnabled = (
  process.env.NODE_ENV === 'development' &&
  process.env.REACT_APP_API_MOCK_ENABLE === "true"
);

export default isApiMockEnabled;
