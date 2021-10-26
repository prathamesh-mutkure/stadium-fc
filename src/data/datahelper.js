import data from "./data.json";

export const getAllPlayers = () => data;

// TODO: use find method
export const searchPlayer = (query = "") => {
  let searched_players = data.filter((player, index) => {
    return (
      player.Name.includes(query) ||
      player.Age == query ||
      player.Club.includes(query) ||
      player.Nationality.includes(query)
    );
  });

  return searched_players;
};
