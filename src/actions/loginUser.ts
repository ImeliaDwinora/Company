"use server"

import { loginFormData } from "@/app/auth/sign-in/page"
import { signIn } from "@/auth";


export async function loginuser(data:loginFormData){
          try {
            await signIn("credentials", {
              email: data.email,
              password: data.password,
            });
            console.log("hihi")
            return {
                status: true
            }
          } catch (error) {
            console.log("hehe")
            return {status: false}
          }
        
}