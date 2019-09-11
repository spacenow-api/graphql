interface IDocument {
  id: string;
  userId: string;
  fileName: string;
  fieType: string;
  documentStatus: string;
  createdAt: Date;
  updatedAt: Date;
}

interface IDocumentInput {
  file: File;
  userId: string;
}

export { IDocument, IDocumentInput };
