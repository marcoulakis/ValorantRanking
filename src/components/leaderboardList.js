import { ApiResponse } from './apiAccess'

const Leaderboard = () => {

  const leaderboardItem = ApiResponse();

  return(
    <div>
      {leaderboardItem
      ?
      <ul className="list-group list-group-numbered">
          {leaderboardItem.players.map((player, index) => (
          <li key={player.puuid} className="list-group-item d-flex list-group-item-action">
            <div className="fw-bold">{index+1+ "°"} {player.gameName}#{player.tagLine}</div>
          </li>
          ))}
      </ul>
      :
        <p>loading...</p>
    }
  </div>
);
}

export { Leaderboard };
