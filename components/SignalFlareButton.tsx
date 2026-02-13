"use client";

const templateMessage =
  "Hi Cameron - I am reaching out about [project/company]. We need help with [payments/system challenge]. Timeline is [timeline], and the best way to connect is [contact info].";

export default function SignalFlareButton() {
  const handleClick = () => {
    const nameInput = document.getElementById("contact-name") as HTMLInputElement | null;
    const emailInput = document.getElementById("contact-email") as HTMLInputElement | null;
    const messageInput = document.getElementById("contact-message") as HTMLTextAreaElement | null;

    if (messageInput) {
      messageInput.value = templateMessage;
      messageInput.focus();
      messageInput.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    if (nameInput && !nameInput.value) {
      nameInput.focus();
    } else if (emailInput && !emailInput.value) {
      emailInput.focus();
    }
  };

  return (
    <button className="button sfx-anchor" type="button" onClick={handleClick} data-sfx-trigger>
      Activate template
      <span
        className="sfx-pop"
        aria-hidden="true"
        data-sfx="PING"
        data-sfx-asset="burst"
        data-sfx-frames="12"
        data-sfx-fps="12"
        data-sfx-cols="4"
        data-sfx-rows="3"
      >
        <span className="sfx-burst" aria-hidden="true" />
        PING
      </span>
    </button>
  );
}
