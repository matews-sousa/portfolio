import type { NextApiRequest, NextApiResponse } from "next";
import { EmailTemplate } from "../../components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { name, email, message } = await JSON.parse(req.body);

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "mateussdamiano@gmail.com",
      subject: `Portfolio contact form message from ${name}`,
      reply_to: email,
      react: EmailTemplate({ name, email, message }),
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};
