"use server";

export async function submitContactForm(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return {
        success: false,
        message: "All fields are required."
      };
    }

    // Prepare form data for Web3Forms
    const web3FormData = new FormData();
    web3FormData.append("access_key", process.env.WEB3FORMS_ACCESS_KEY!);
    web3FormData.append("name", name);
    web3FormData.append("email", email);
    web3FormData.append("subject", subject);
    web3FormData.append("message", message);

    // Submit to Web3Forms
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: web3FormData
    });

    const data = await response.json();

    if (data.success) {
      return {
        success: true,
        message: "Message sent successfully! I'll get back to you soon."
      };
    } else {
      console.error("Web3Forms error:", data);
      return {
        success: false,
        message: data.message || "Failed to send message. Please try again."
      };
    }
  } catch (error) {
    console.error("Contact form error:", error);
    return {
      success: false,
      message: "An error occurred. Please try again later."
    };
  }
}
