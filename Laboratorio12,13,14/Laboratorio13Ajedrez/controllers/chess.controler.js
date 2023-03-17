const games = require('../models/chess.model.js');
  
  exports.get_game = (req, res, next) => {
    res.setHeader('Set-Cookie', `lastURL=${req.originalUrl}; HttpOnly`);
    res.render('game.ejs', { game: games.at(Number(req.params.id)-1) });
    req.session.liga = req.cookies.lastURL;
  }

  exports.get_index = (req, res, next) => {
    const lastURL = req.session.liga || '';
    if (lastURL) {
      res.redirect(lastURL);
      console.log("redirected");
    } else {
      res.render('chess', { games: games });
      console.log("not redirected");
      console.log(lastURL);
    }
  };
