export function UploadHeader() {
  return (
    <div className="flex w-full max-w-4xl flex-col items-start justify-start">
      <h1 className="text-3xl font-bold text-gray-900">Upload Documents</h1>
      <p className="mt-3 text-sm text-gray-500">
        Drag and drop files here or browse to upload. Supported formats: PDF, JPG, PNG. Max file size: 20MB.
      </p>
    </div>
  );
}
