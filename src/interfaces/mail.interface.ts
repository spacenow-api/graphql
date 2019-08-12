interface IMailRequest {
  to: string;
  subject: string;
  html: string;
}

interface IMailConfirmation {
  messageId: string;
}

export { IMailRequest, IMailConfirmation }
