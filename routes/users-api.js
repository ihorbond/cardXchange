const express   = require('express');
const router    = express.Router();
const mongoose  = require('mongoose');
const UserModel = require('../models/userModel');
const CardModel = require('../models/cardModel');

//show user's profile
router.get('/profile', (req, res, next) => {
  if (req.user === undefined) {
    res.status(418).json({message: "Pls login first"});
    return;
  }
  const userId = req.user._id;
  let cardsArray = [];
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  UserModel.findById(userId, (err, theUser) => {
    if (err) {
      res.json(err);
      return;
    }
    if (!theUser.cards.length) {
      res.json({message: "No cards to display", userInfo: theUser});
      return;
    }
    theUser.cards.forEach(oneCard => {
      CardModel.findById(oneCard._id, (err, theCard) => {
        //do i need to check for error??
      cardsArray.push(theCard);
      });
    });
    res.json(theUser);
  });
});

module.exports = router;
