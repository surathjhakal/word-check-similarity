import bcrypt from "bcrypt";
import { db as prisma } from "@/lib/db";
import { NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const body: any = await req.body;
  const { name, email, password } = body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "Missing Fields" });
  }

  const exist = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (exist) {
    console.log("email exist");
    return res.status(400).json({ error: "Email already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      hashedPassword,
    },
  });

  return res.json(user);
};

export default handler;
