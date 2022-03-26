import dbConnect from "../../utility/mongo";
import tester from "../../models/Gamerhub";

export default async function handler(req, res) {
  await dbConnect();

  const method = req.method;

  switch (method) {
    case "POST":
      try {
        const users = await tester.findOne({
          "games.title": req.body.games,
        });

        //res.json({ data: users.games });

        if (users) {
          try {
            const gum = await tester.findOneAndUpdate(
              {
                "games.title": req.body.games,
              },
              {
                $addToSet: {
                  "games.$.review": [req.body.rev],
                },
              }
            );

            res.status(201).json({
              success: "update sucess",
              data: gum,
            });
          } catch (error) {
            res.status(400).json({ success: "update failed" });
          }
        }
      } catch (error) {
        res.status(400).json({ success: "game not found" });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
