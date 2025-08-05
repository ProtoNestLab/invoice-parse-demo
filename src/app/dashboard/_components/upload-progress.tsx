export function UploadProgress() {
  return (
    <div className="mt-4 flex w-full max-w-4xl flex-col items-center justify-center">
      <div className="flex w-full flex-col items-start justify-start">
        <p className="text-base font-medium text-gray-900">Uploading 3 files</p>
        <div className="mt-3 h-2 w-full rounded-full bg-gray-200">
          <div className="h-2 rounded-full bg-gray-900" style={{ width: '60%' }} />
        </div>
        <p className="mt-3 w-full text-sm text-gray-500">60% complete</p>
      </div>
    </div>
  );
}
