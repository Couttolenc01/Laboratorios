const games = require('../models/chess.model.js');
  
  exports.get_game = (req, res, next) => {
    res.setHeader('Set-Cookie', `lastURL=${req.originalUrl}; HttpOnly`);
    res.render('game.ejs', { game: games.at(Number(req.params.id)-1) });
    
  }

  exports.get_index = (req, res, next) => {
    res.render('chess', { games: games });
  };
