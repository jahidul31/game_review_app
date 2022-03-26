import dbConnect from "../../utility/mongo";
import tester from "../../models/Gamerhub";

export default async function handler(req, res) {
  await dbConnect();

  const method = req.method;

  switch (method) {
    case "POST":
      try {
        const users = await tester.findOne({ email: req.body.email });
        if (users.email) {
          try {
            const gum = await tester.findOneAndUpdate(
              { email: req.body.email },
              {
                $addToSet: {
                  games: req.body.gam,
                },
              }
            );

            res.status(201).json({
              success: "update sucess",
              consol: req.body.gam.title,
              data: gum,
            });
          } catch (error) {
            res.status(400).json({ success: "update failed" });
          }
        }
      } catch (error) {
        res.status(400).json({ success: "user not found" });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
