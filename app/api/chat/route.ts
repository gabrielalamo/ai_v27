import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  // Por enquanto, vamos permitir chat sem login
  // Mais tarde você pode adicionar autenticação aqui
  
  try {
    const body = await request.json()
    
    // Cria um chat temporário sem autenticação
    return NextResponse.json({
      id: Math.random().toString(36).substr(2, 9),
      message: "Chat criado com sucesso!",
      ...body
    })
    
  } catch (error) {
    return NextResponse.json({
      error: 'Erro ao criar chat'
    }, { status: 500 })
  }
}