const CLIENT_ID = 42658;
const CLIENT_SECRET = "df608a3b3e4c18c32cee62a3da35f30bbf845a7d";
// const ACCESS_TOKEN = "97de161f6a4524eefabe70c3dd7d2e01334b38a6";

const TOKEN_URL = "https://www.strava.com/oauth/token";

const ACTIVITY_URL =
  "https://www.strava.com/api/v3/athlete/activities?per_page=30";

const getUserToken = code => {
  let data = new URLSearchParams();
  data.append("client_id", CLIENT_ID);
  data.append("client_secret", CLIENT_SECRET);
  data.append("code", code);
  data.append("grant_type", "authorization_code");
  return fetch(TOKEN_URL, {
    method: "POST",
    headers: { Accept: "application/json" },
    body: data
  }).then(resp => resp.json());
};

const getUserActivities = accessToken => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${accessToken}`);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  fetch(
    "https://www.strava.com/api/v3/athlete/activities?per_page=30",
    requestOptions
  )
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log("error", error));

  // const bearer = "Bearer " + accessToken;
  // return fetch(ACTIVITY_URL, {
  //   headers: {
  //     Accept: "application/json",
  //     code: bearer
  //   }
  // });
};

export default { getUserToken, getUserActivities };
