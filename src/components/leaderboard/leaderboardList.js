import { LeaderboardApiAccess } from '../../services/leaderboardApiAccess'

const LeaderboardList = () => {

  const leaderboardItem = LeaderboardApiAccess();

  console.log(leaderboardItem)
  return(
    <div>
      {leaderboardItem
      ?
      <ul className="list-group list-group-numbered">
          {leaderboardItem.players.map((player, index) => (
            player.puuid &&
              <li key={player.puuid} className="list-group-item d-flex list-group-item-action justify-content-between">
                <div className="fw-bold">{index+1+ "°"} {player.gameName}#{player.tagLine}</div>
                <div className="fw-bold">Ranked Rating: {player.rankedRating}</div>
                <div className="fw-bold">Wins: {player.numberOfWins}</div>
                <div className="fw-bold">Competitive Tier: {player.competitiveTier}</div>
              </li>
          ))}
      </ul>
      :
        <p>loading...</p>
    }
  </div>
);
}

export { LeaderboardList };
