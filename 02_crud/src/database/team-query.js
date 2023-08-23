exports.findAllTeams = () => {

    return `
        SELECT * FROM TBL_TEAM
    `;
};

exports.findTeamByTeamCode = () => {

    return `
        SELECT * FROM TBL_TEAM WHERE TEAM_CODE = ?
    `;
};

exports.registNewTeam = () => {

    return `
        INSERT
        INTO TBL_TEAM
        (TEAM_NAME, TEAM_PRICE, LEAGUE_CODE)
        VALUES
        (?, ?, ?)
        `;
};

exports.modifyTeam = () => {

    return `
        UPDATE TBL_TEAM
        SET TEAM_NAME = ?, TEAM_PRICE = ?, LEAGUE_CODE =?
        WHERE TEAM_CODE = ?
        `;
};

exports.deleteTeam = () => {

    return `
        DELETE FROM TBL_TEAM
        WHERE TEAM_CODE = ?
        `;
};