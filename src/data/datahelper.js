import data from "./data.json";

export const getAllPlayers = () => data;

export const getPlayerByIndex = (index) => data[index];

export const searchPlayer = (query = "") => {
  let searched_players = data.filter((player, index) => {
    return (
      query != "" &&
      (player.Name.toLowerCase().includes(query) ||
        player.Age == query ||
        player.Club.toLowerCase().includes(query) ||
        player.Nationality.toLowerCase().includes(query))
    );
  });

  return searched_players;
};
