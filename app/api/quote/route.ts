export async function POST(request: Request) {
  try {
    const body = await request.json();
    return Response.json({ success: true, data: body });
  } catch {
    return Response.json({ success: false }, { status: 500 });
  }
}