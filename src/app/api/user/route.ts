import { NextResponse, NextRequest } from "next/server";

type role = "AUTHOR" | "READER" | "ADMIN";

interface MockUser {
  id: number;
  name: string;
  email: string;
  password: string;
  role: role;
}

const mockUsers: MockUser[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@mail.com",
    password: "newpassAbc123",
    role: "ADMIN",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane.doe@mail.com",
    password: "newpassAbc123",
    role: "AUTHOR",
  },
  {
    id: 3,
    name: "Jono Dae",
    email: "jono.dae@mail.com",
    password: "newpassAbc123",
    role: "READER",
  },
];

export async function GET(request: NextRequest) {
  const email = request.nextUrl.searchParams.get("email");
  if(email){
     const userData = mockUsers.find(item => item.email === email)
     if(userData){
        return NextResponse.json(userData)
     }
     return NextResponse.json({error: "USER NOT FOUND"})
  }
  return NextResponse.json({ mockUsers });
}

