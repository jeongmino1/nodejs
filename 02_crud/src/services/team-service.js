const getConnection = require('../database/connection');
const TeamRepository = require('../repositories/team-repo');

exports.findAllTeams = () => {

    return new Promise((resolve, reject) => {

    const connection = getConnection();

    const results = TeamRepository.findAllTeams(connection);

    connection.end();

    resolve(results);
    });
}

exports.findTeamByTeamCode = (teamCode) => {
    return new Promise((resolve, reject) => {
        const connection = getConnection();

        const results = TeamRepository.findTeamByTeamCode(connection, teamCode);

        connection.end();

        resolve(results);
    });
}

exports.registNewTeam = (team) => {

    return new Promise(async (resolve, reject) => {

        const connection = getConnection();

        connection.beginTransaction();

        try {

            const result = await TeamRepository.registNewTeam(connection, team);

            connection.commit();

            const insertedTeam = await TeamRepository.findTeamByTeamCode(connection, result.insertId);
            
            resolve(insertedTeam);

        } catch(err) {
            connection.rollback();

            reject(err);
        } finally {
            connection.end();
        }
    });
};

exports.modifyTeam = (team, teamCode) => {

    return new Promise(async (resolve, reject) => {

        const connection = getConnection();

        connection.beginTransaction();

        try {
            await ArtistRepository.updateArtist(connection, team, teamCode);

            connection.commit();

            resolve(ArtistRepository.getArtistById(connection, teamCode));

        } catch (error) {

            connection.rollback();

            reject(error);

        } finally {
            connection.end();
        }
    });
}

exports.deleteTeam = (teamCode) => {

    return new Promise (async (resolve, reject) => {

        const connection = getConnection();

        try {
            const results = await TeamRepository.deleteTeam(connection, teamCode);

            connection.commit();

            if(results.length === 0) {
                resolve(null);
            }

            resolve(results);

        } catch(err) {
            connection.rollback();

            reject(err);
        } finally {
            connection.end();
        }
    });
}