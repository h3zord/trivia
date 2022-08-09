const TOKEN_URL = 'https://opentdb.com/api_token.php?command=request';

const getToken = async () => {
  const response = await fetch(TOKEN_URL);
  const data = await response.json();
  localStorage.setItem('token', data.token);
  console.log('token é', typeof data.token);
  return data.token;
};

export default getToken;
