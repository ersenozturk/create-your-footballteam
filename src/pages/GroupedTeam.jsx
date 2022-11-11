import { useState } from "react";
import { useAllocationContext } from "../context/AllocationContext";

const GroupedTeam = () => {
  const { playersData, selectedTeamName, setselectedTeamName } =  useAllocationContext();

  const [groupedPlayers, setGroupedPlayers] = useState(makeGroupTeamMembers());

  function makeGroupTeamMembers() {
    const teams = [];

    let dragonMembers = playersData.filter(
      (eachFootballer) => eachFootballer.teamName === "Dragon"
    );
    let dragon = {
      team: "Dragon",
      members: dragonMembers,
      collapsed: selectedTeamName === "Dragon" ? false : true,
    };
    teams.push(dragon);

    let eagleMembers = playersData.filter(
      (eachFootballer) => eachFootballer.teamName === "Eagle"
    );
    let eagle = {
      team: "Eagle",
      members: eagleMembers,
      collapsed: selectedTeamName === "Eagle" ? false : true,
    };
    teams.push(eagle);

    let snakeMembers = playersData.filter(
      (eachFootballer) => eachFootballer.teamName === "Snake"
    );
    let snake = {
      team: "Snake",
      members: snakeMembers,
      collapsed: selectedTeamName === "Snake" ? false : true,
    };
    teams.push(snake);

    let wolfMembers = playersData.filter(
      (eachFootballer) => eachFootballer.teamName === "Wolf"
    );
    let wolf = {
      team: "Wolf",
      members: wolfMembers,
      collapsed: selectedTeamName === "Wolf" ? false : true,
    };
    teams.push(wolf);

    return teams;
  }

  function handleTeamRowClick(e) {
    let newGroupedPlayers = groupedPlayers.map((each) =>
      each.team === e.currentTarget.id
        ? { ...each, collapsed: !each.collapsed }
        : each
    );
    setGroupedPlayers(newGroupedPlayers);
    setselectedTeamName(e.currentTarget.id);
  }

  return (
    <div className="container text-center col-md-6">
      {groupedPlayers.map((each, index) => {
        const { team, members, collapsed } = each;
        return (
          <div key={index} className="card mt-2" style={{ cursor: "pointer" }}>
            <h4
              id={team}
              className="card-header  bg-danger"
              onClick={handleTeamRowClick}
            >
              Team Name: {team}
            </h4>
            <div
              id={"collapse_" + team}
              className={collapsed === true ? "collapse" : ""}
            >
              <hr />
              {members.map((eachMember, i) => {
                return (
                  <div key={i} className="mt-2">
                    <h5 className="card-title mt-2">
                      Legend Name: {eachMember.name}
                    </h5>
                    <p>Nation: {eachMember.nation}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GroupedTeam;
