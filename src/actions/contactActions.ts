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
        message: "All fields are required.",
      };
    }

    // Check if access key is configured
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (!accessKey || accessKey === "your_web3forms_access_key_here") {
      console.error("Web3Forms access key not configured");
      return {
        success: false,
        message:
          "Contact form is not properly configured. Please try again later.",
      };
    }

    // Prepare FormData for Web3Forms (exactly like the docs example)
    const web3FormData = new FormData();
    web3FormData.append("access_key", accessKey);
    web3FormData.append("name", name);
    web3FormData.append("email", email);
    web3FormData.append("subject", subject);
    web3FormData.append("message", message);

    // Submit to Web3Forms using FormData (no custom headers)
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: web3FormData,
    });

    const data = await response.json();

    if (data.success) {
      return {
        success: true,
        message: "Message sent successfully! I'll get back to you soon.",
      };
    } else {
      console.error("Web3Forms error:", data);
      return {
        success: false,
        message: data.message || "Failed to send message. Please try again.",
      };
    }
  } catch (error) {
    console.error("Contact form error:", error);
    return {
      success: false,
      message: "An error occurred. Please try again later.",
    };
  }
}
