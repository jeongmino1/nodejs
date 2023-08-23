const teamQuery = require('../database/team-query');
const { connect } = require('../routes/team-route');

exports.findAllTeams = (connection) => {

    return new Promise((resolve, reject) => {

        connection.query(teamQuery.findAllTeams(), (err, result) => {
            if(err) {
                reject(err);
            }

            resolve(result)
        });
    });
};

exports.findTeamByTeamCode = (connection, teamCode) => {
    return new Promise((resolve, reject) => {
        connection.query(teamQuery.findTeamByTeamCode(), [teamCode],  (err, result) => {
            if(err) {
                reject(err);
            }

            resolve(result);

        });
    });
};

exports.registNewTeam = (connection, newteam) => {

    return new Promise((resolve, reject) => {

        connection.query(teamQuery.registNewTeam(), [newteam.teamName, newteam.teamPrice, newteam.leagueCode], (error, results, fields) => {

            if (error) {

                reject(error);
            }

            resolve(results);
        });
    });
}

exports.modifyTeam = (connection, team, teamCode) => {

    return new Promise((resolve, reject) => {

        connection.query(teamQuery.modifyTeam(), [team.teamName, team.teamPrice, teamCode], (err, results, fields) => {

            if(err) {

                reject(err);
            }
            resolve(results);
        });
    });
}

exports.deleteTeam = (connection, teamCode) => {

    return new Promise((resolve, reject) => {

        connection.query(teamQuery.deleteTeam(), [team, teamCode], (err, results, fields) => {

            if(err) {

                reject(err);
            }

            resolve(results);
        });
    });
}