const TeamService = require('../services/team-service');
const HttpStatus = require('http-status');

exports.findAllTeams = async(req, res, next) => {

    const teams = await TeamService.findAllTeams();

    res.status(HttpStatus.OK).send({
        status: HttpStatus.OK,
        message: 'OK',
        data: teams
    });
};

exports.findTeamByTeamCode = async (req, res, next) => {

    const team = await TeamService.findTeamByTeamCode(req.params.teamCode);

    res.status(HttpStatus.OK).send({
        status: HttpStatus.OK,
        message: 'OK',
        data: team
    })
};

exports.registNewTeam = async (req, res, next) => {

    const team = req.body;

    const createdTeam = await TeamService.registNewTeam(team);

    res.status(HttpStatus.CREATED).send({
        status: HttpStatus.CREATED,
        message: 'OK',
        data: createdTeam
    });
};

exports.modifyTeam = async (req, res, next) => {

    const teamCode = req.params.teamCode
    const team = req.body;

    const result = await TeamService.modifyTeam(teamCode, team);

    res.status(HttpStatus.OK).send({
        status: HttpStatus.OK,
        message: 'OK',
        data: result
    });
};

exports.deleteTeam = async (req, res, next) => {

    const teamCode = req.params.teamCode

    const result = await TeamService.deleteTeam(teamCode);

    res.status(HttpStatus.OK).send({
        status: HttpStatus.OK,
        message: 'OK',
        data: result
    });
};