import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import passport from "passport";

const router = createRouter<NextApiRequest, NextApiResponse>();

router
  .use(passport.authenticate("facebook", { failureRedirect: "/" }))
  .get((req, res) => {
    return res.status(200).json({ message: "successfully" });
  });

export default router.handler({
  onError: (err, req, res) => {
    res.status(500).end("Something went wrong");
  },
});
