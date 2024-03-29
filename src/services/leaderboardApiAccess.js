import { useEffect, useState } from 'react';
import axios from 'axios';

const LeaderboardApiAccess = () => {
  const riotKey = process.env.REACT_APP_API_KEY;
  const defaultState = {
    isSet: false,
  };
  const [content, setContent] = useState(defaultState);
  const [leaderboards, setLeaderboards] = useState(defaultState);

  const urlOfContent = '/val/content/v1/contents?locale=pt-BR&api_key=' + riotKey;

  useEffect(() => {
    fetchData();
  }, [content.isSet]);

  async function fetchData() {
    if (!content.isSet) {
      await apiRequest(urlOfContent, setContent);
    } else {
      const activeAct = await findActiveAct();
      const urlOfLeaderboard = await generateUrlOfLeaderboard(activeAct);
      await apiRequest(urlOfLeaderboard, setLeaderboards);
    }
  }

  const apiRequest = async (url, setState) => {
    try {
      const response = await axios.get("https://br.api.riotgames.com" + url);
      setState({
        isSet: true,
        data: response.data,
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const findActiveAct = () => {
    const acts = content.data.acts;

    for (let i = 0; i < acts.length; i++) {
      if (acts[i].type === 'act' && acts[i].isActive === true) {
        return acts[i].id;
      }
    }
  };

  const generateUrlOfLeaderboard = (actParamater) => {
    return (
      '/val/ranked/v1/leaderboards/by-act/' +
      actParamater +
      '?size=200&startIndex=0&api_key=' +
      riotKey
    );
  };

  if (leaderboards.isSet) {
    return leaderboards.data;
  } else {
    return null;
  }
};

export { LeaderboardApiAccess };
