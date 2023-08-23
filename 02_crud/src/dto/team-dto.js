class TeamDTO {

    teamCode;
    teamName;
    teamPrice;
    leagueCode;
    detail = {};

    constructor(data) {
        this.teamCode = data.teamCode;
        this.teamName = data.teamName;
        this.teamPrice = data.teamPrice;
        this.leagueCode = data.leagueCode;
    }
}

module.exports = TeamDTO;