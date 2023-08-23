const express = require('express');
const router = express.Router();
const TeamController = require('../controllers/team-controller');

router.get('/', TeamController.findAllTeams);
router.get('/:teamCode', TeamController.findTeamByTeamCode);
router.post('/', TeamController.registNewTeam);
router.put('/', TeamController.modifyTeam);
router.delete('/', TeamController.deleteTeam);

module.exports = router;
