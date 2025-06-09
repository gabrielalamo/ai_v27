import { auth } from "@/lib/auth"

// Exporta diretamente do auth
export const GET = auth.handler
export const POST = auth.handler