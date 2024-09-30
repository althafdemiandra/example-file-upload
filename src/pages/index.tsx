import { FileUpload } from '@ark-ui/react';

const MEGABYTE = 1024 * 1024;

export const Basic = () => {
  return (
    <FileUpload.Root maxFiles={1} accept={'image/*'} maxFileSize={MEGABYTE}>
      <FileUpload.Label>File Upload</FileUpload.Label>
      <FileUpload.Dropzone>Drag your file(s) here</FileUpload.Dropzone>
      <FileUpload.Trigger>Choose file(s)</FileUpload.Trigger>
      <FileUpload.ItemGroup>
        <FileUpload.Context>
          {({ acceptedFiles }) =>
            acceptedFiles.map((file) => (
              <FileUpload.Item
                className="text-white"
                key={file.name}
                file={file}
              >
                <FileUpload.ItemPreview type="image/*">
                  <FileUpload.ItemPreviewImage />
                </FileUpload.ItemPreview>
                {/* <FileUpload.ItemPreview type=".*">
                  <FileIcon />
                </FileUpload.ItemPreview> */}
                <FileUpload.ItemName />
                <FileUpload.ItemSizeText />
                <FileUpload.ItemDeleteTrigger>X</FileUpload.ItemDeleteTrigger>
              </FileUpload.Item>
            ))
          }
        </FileUpload.Context>
      </FileUpload.ItemGroup>
      <FileUpload.HiddenInput />
    </FileUpload.Root>
  );
};

export default function Home() {
  return (
    <div>
      <Basic />
    </div>
  );
}
