const CONTACT = {
  whatsapp: "923264213612", // Just the number for easier message formatting
  instagram: "https://www.instagram.com/studysmith.pk?igsh=MXRmOGMyZHU3cTl6Nw==",
  tiktok: "https://www.tiktok.com/@studysmith.pk?_r=1&_t=ZN-945G2xQ3Ms2"
};

document.addEventListener("DOMContentLoaded", () => {
  // 1. Set Instagram Link
  const igBtn = document.getElementById("instagram-link");
  if (igBtn) igBtn.href = CONTACT.instagram;

  // 2. Set TikTok Link
  const ttBtn = document.getElementById("tiktok-link");
  if (ttBtn) ttBtn.href = CONTACT.tiktok;

  // 3. Set WhatsApp Link with your custom message
  const waBtn = document.getElementById("whatsapp-link");
  if (waBtn) {
    const message = encodeURIComponent("Hi StudySmith! I'm interested in elevating my academic performance. Can we talk?");
    waBtn.href = `https://wa.me/${CONTACT.whatsapp}?text=${message}`;
  }
});

