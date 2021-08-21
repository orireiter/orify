import CONF from "../conf";

export const fetchSpotifyTokens = async (codeStr) => {
  let url = new URL(`${CONF.SPOTIFY_API_URL}/token`);
  url.searchParams.append("grant_type", "authorization_code");
  url.searchParams.append("redirect_uri", CONF.SPOTIFY_REDIRECT_URI);
  url.searchParams.append("client_id", CONF.SPOTIFY_CLIENT_ID);
  url.searchParams.append("client_secret", CONF.SPOTIFY_CLIENT_SECRET);
  url.searchParams.append("code", codeStr);

  let requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    redirect: "follow",
  };

  let responseData = fetch(url, requestOptions)
    .then((response) => response.json())
    .then((responseJson) => responseJson);

  return responseData;
};

export const getSpotifyRegisterUrl = () => {
  return `${CONF.SPOTIFY_AUTH_URL}?client_id=${CONF.SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=${CONF.SPOTIFY_REDIRECT_URI}&scope=${CONF.SPOTIFY_RELEVANT_AUTH_SCOPE}`;
};
