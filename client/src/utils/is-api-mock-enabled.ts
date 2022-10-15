const isApiMockEnabled = (
  process.env.NODE_ENV === 'test' ||
  process.env.REACT_APP_API_MOCK_ENABLE === "true"
);

export default isApiMockEnabled;
