import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, apellido, personas, asistencia } = body;

    // BARRERA DE SEGURIDAD: Verificamos que los campos obligatorios existan y no estén vacíos
    if (!nombre || !apellido || !personas || !asistencia) {
      return NextResponse.json(
        { success: false, message: "Faltan datos obligatorios" }, 
        { status: 400 }
      );
    }

    const googleResponse = await fetch(process.env.GOOGLE_SCRIPT_URL!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const result = await googleResponse.json();

    if (result.success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } catch (error) {
    console.error("Error al conectar con Apps Script:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}