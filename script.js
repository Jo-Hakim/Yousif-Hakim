const sections = ["home", "portfolio", "services", "contact"];
const form = document.getElementById("message-form"),
  serviceID = "service_I3m37wc",
  templateID = "template_bo778km",
  first = document.getElementById("f-name"),
  last = document.getElementById("l-name"),
  email = document.getElementById("email"),
  message = document.getElementById("message"),
  certificates = document.getElementsByClassName("certificate");

function showContent(sectionId) {
  for (const id of sections) {
    const section = document.getElementById(id);
    if (id === sectionId) {
      section.style.display = "block";
      section.style.paddingBottom = "30px";
    } else {
      section.style.display = "none";
    }
  }
}
let certificateInterval;
document.addEventListener("DOMContentLoaded", function () {
  startCertificateInterval();
});
function startCertificateInterval() {
  clearInterval(certificateInterval);
  certificateInterval = setInterval(changeCertificate, 5000);
}
function download(app) {
  const link = document.createElement("a");
  link.href = app;
  link.download = app;
  link.click();
}
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = first.value.trim() + " " + last.value.trim();
  const emailAddress = email.value.trim();
  const messageText = message.value.trim();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  sendEmail(username, emailAddress, messageText);
  for (const i of document.querySelectorAll('input:not([type="submit"])')) {
    i.value = "";
  }
  message.value = "";
});

emailjs.init("gsGbOGblQxbLNhJUW");
async function sendEmail(name, email, message) {
  try {
    await emailjs.send("service_s2ppzdh", "template_bo778km", {
      from_name: name,
      reply_to: email,
      message: message,
    });
    alert("Your message has been sent");
  } catch (err) {
    alert(`error is ${JSON.stringify(err)}`);
  }
}

var currentCertificate = 0;
function changeCertificate() {
  certificates[currentCertificate].style.animation =
    "goLeft 0.3s ease-out forwards";

  setTimeout(() => {
    certificates[currentCertificate].style.display = "none";

    currentCertificate = (currentCertificate + 1) % certificates.length;

    certificates[currentCertificate].style.display = "inline-flex";

    certificates[currentCertificate].style.animation =
      "comeFromRight 0.3s ease-out forwards";
  }, 300);
}
function changeCertificateBack() {
  certificates[currentCertificate].style.animation =
    "goRight 0.3s ease-out forwards";

  setTimeout(() => {
    certificates[currentCertificate].style.display = "none";
    if (currentCertificate == 0) {
      currentCertificate = certificates.length - 1;
    } else {
      currentCertificate = currentCertificate - 1;
    }

    certificates[currentCertificate].style.display = "inline-flex";

    certificates[currentCertificate].style.animation =
      "comeFromLeft 0.3s ease-out forwards";
  }, 300);
}
