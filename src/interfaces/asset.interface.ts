interface IAsset {
  title: string;
  description: string;
  accessControl: string;
  isActive: true;
}

interface IAssetInput {
  file: File;
  folder?: string;
}

interface IAssetOutput extends IAsset {
  fileType: string;
  fileName: string;
  sizes: Array<IAssetSize>;
  createdAt: Date;
  updatedAt: Date;
}

interface IAssetSize {
  size: string;
}

export { IAssetOutput as default, IAssetInput };
