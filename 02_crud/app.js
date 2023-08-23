// const TeamController = require('./src/controllers/team-controller');

// TeamController.findTeamByTeamCode(10);

// TeamController.registNewTeam({
//     teamName: '토트넘',
//     teamPrice: 123123123,
//     leagueCode: 1
// });

const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

const teamRouter = require('./src/routes/team-route');
app.use('/teams', teamRouter);

app.listen(8881, () => console.log('listening on port 8881'));