const { Router } = require('express');
const router = new Router();

const User = require('../models').user;
const Country = require('../models').country;
const Locationpost = require('../models').locationpost;
const nodemailer = require('nodemailer');
const { AUTH_USER, AUTH_PASS } = require('../config/constants');

router.get('/locationpost/:postId', async (req, res, next) => {
  try {
    const { postId } = req.params;
    const getPost = await Locationpost.findByPk(postId);
    if (!getPost) {
      res.status(400).send('sorry post not found');
    } else {
      res.send(getPost);
    }
  } catch (e) {
    next(e);
  }
});

router.post('/newpost', async (req, res, next) => {
  const {
    title,
    description,
    imageUrl,
    id,
    countryId,
    adress,
    latitude,
    longitude,
  } = req.body;
  if (!title && !description && !imageUrl && !adress) {
    res
      .status(404)
      .send({ message: 'Please fill in all fields and try again' });
  }
  try {
    const newPost = await Locationpost.create({
      title,
      description,
      imageUrl,
      adress,
      latitude,
      longitude,
      countryId,
      userId: id,
    });
    res.status(200).send(newPost);
  } catch (error) {
    res.status(404).send({
      message:
        'Oops! Please fill out all the fields and check the checkbox to upload your amazing post.',
    });
  }
  //nodemailer
  const transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
      user: `${AUTH_USER}`,
      pass: `${AUTH_PASS}`,
    },
  });

  // need to send EMAIL + NAME  credentials from FE store to BE via Dispatch!!
  const confirmationPostEmailTemplate = {
    from: `${AUTH_USER}`,
    to: `${email}`,
    subject: `Hidden Gems, post confirmation`,
    text: `Hey ${name}, You have successfully shared your amazing location with the community! Thank you so much for sharing your gem with the rest of us!
    
    The location you have shared is: ${title} which is located in ${adress}.

    You have added the description: ${description}.

    If you want to change anything about this post, please go to the userDashboard and click "edit posts".

    Our sincere apologies - the "edit posts" functionality is currently in development.

    Should you have feedback do not hesitate to share it with us so we may improve hidden gems and improve your experience and the community.

    Happy travels! 
    `,

    html: `
     <h2>
     Hey ${name}, You have successfully shared your amazing location with the community! 
     </h2>

     <h3>Thank you so much for sharing your gem with the rest of us!</h3>

     <p>The location you have shared is: ${title} which is located in ${adress}.</p>

     <p>You have added the description: ${description}.</p>
     
     <p>If you want to change anything about this post, please go to the userDashboard and click "edit posts".</p>
     
     <p>Our sincere apologies - the "edit posts" functionality is currently in development.</p>
     
     <p>Should you have feedback do not hesitate to share it with us so we may improve hidden gems and improve your experience and the community.</p>
     
     <p>Happy travels!</p>

    `,
  };

  transporter.sendMail(confirmationPostEmailTemplate, function (err, data) {
    if (err) {
      console.log('error Occurs', err);
    } else {
      console.log('email send!');
    }
  });
});

//LikesPatch
router.patch('/locationposts/:postId', async (req, res, next) => {
  const { postId } = req.params;
  try {
    const locationPostToUpdate = await Locationpost.findByPk(postId);
    if (!locationPostToUpdate) {
      res.status(404).send('post not found');
    } else {
      const updated = await locationPostToUpdate.update({ ...req.body });
      res.status(200).send(updated);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
