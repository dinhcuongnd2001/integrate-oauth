import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import passport from "passport";
const FacebookStrategy = require("passport-facebook");

const router = createRouter<NextApiRequest, NextApiResponse>();

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_APP_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: `${process.env.CLIENT_HOST}/auth/facebook/callback`,
    },
    function (
      accessToken: string,
      refreshToken: string,
      profile: any,
      cb: () => void
    ) {
      console.log("profile ::", profile);
    }
  )
);
router.use(passport.authenticate("facebook")).get((req, res) => {
  return res.status(200).json({ message: "successfully" });
});

export default router.handler({
  onError: (err, req, res) => {
    res.status(500).end("Something went wrong");
  },
});
