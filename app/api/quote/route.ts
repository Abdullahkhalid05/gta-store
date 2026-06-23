export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("Received form data:", body);
    console.log("Sending to URL:", process.env.GOOGLE_SCRIPT_URL);

    const response = await fetch(process.env.GOOGLE_SCRIPT_URL!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const responseText = await response.text();
    console.log("Google response status:", response.status);
    console.log("Google response body:", responseText);

    if (!response.ok) {
      throw new Error("Failed to submit to Google Sheets");
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Error in quote route:", error);
    return Response.json({ success: false, error: "Submission failed" }, { status: 500 });
  }
}