import { FormData } from "@/app/contact/page";
import emailjs from "@emailjs/browser";

export async function sendEmail(data: FormData) {
  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const userId = process.env.NEXT_PUBLIC_USER_ID;

  const templateParams = {
    first_name: data.firstName,
    last_name: data.lastName,
    email: data.email,
    message: data.message,
  };

  await emailjs
    .send(
      serviceId as string,
      templateId as string,
      templateParams,
      userId as string
    )
    .then((success) => {
      alert("Email sent successfully!");
    })
    .catch((error) => {
      alert("Error sending email");
      console.error(error);
    });
}
