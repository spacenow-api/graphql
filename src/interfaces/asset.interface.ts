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

interface IListingAsset {
  listingId: number;
  assetId: string;
  isCover: boolean;
}

interface IListingAssetInput extends IListingAsset {}

interface IListingAssetOutput extends IListingAsset {
  asset: IAssetOutput;
}

export {
  IAssetOutput as default,
  IAssetInput,
  IListingAssetOutput,
  IListingAssetInput
};
