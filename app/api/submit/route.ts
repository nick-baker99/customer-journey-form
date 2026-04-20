import { formSchema } from "@/app/formSchema";
import { NextRequest, NextResponse } from "next/server";

// Implement your form submission API handler here
export async function POST(req: NextRequest) {
  const body = await req.json();

  // use zod schema to validate data
  const validated = formSchema.safeParse(body);

  if (!validated.success) {
    return NextResponse.json(
      { message: "Invalid data", error: validated.error }, 
      { status: 400 }
    );
  }

  // this is where user data would be processed and added to a database

  return NextResponse.json({ message: "Success" }, { status: 200 });
}