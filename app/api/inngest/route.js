import { serve } from "inngest/next";
import { inngest, syncUserCreation, syncUserDeletion, syncUserUpdate } from "@/config/inngest";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    // Add your Inngest functions here
    syncUserCreation,
    syncUserUpdate,
    syncUserDeletion
  ],
});