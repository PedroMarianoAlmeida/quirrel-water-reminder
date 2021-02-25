// pages/api/setupReminder.js
export default async (req, res) => {
    const email = req.body;
    console.log(`I'll setup the reminder for ${email}.`);
    res.status(200).end();
  }