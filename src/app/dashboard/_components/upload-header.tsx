export function UploadHeader() {
  return (
    <div className="flex w-full max-w-4xl flex-col items-start justify-start">
      <h1 className="font-bold text-3xl text-gray-900">Upload Documents</h1>
      <p className="mt-3 text-gray-500 text-sm">
        Drag and drop files here or browse to upload. Supported formats: PDF,
        JPG, PNG. Max file size: 20MB.
      </p>
    </div>
  );
}
