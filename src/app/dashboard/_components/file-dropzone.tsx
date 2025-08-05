"use client"

export function FileDropzone() {
  return (
    <div className="mt-4 flex w-full max-w-4xl items-center justify-center">
      <div className="flex w-full flex-col items-center justify-start rounded-lg border-2 border-dashed border-gray-300 bg-white px-6 py-14">
        <div className="flex max-w-sm flex-col items-center justify-start">
          <div className="flex flex-col items-center justify-start">
            <p className="text-lg font-bold text-gray-900">Drag and drop files here</p>
            <p className="mt-2 text-sm text-gray-500">Or</p>
          </div>
          <form action="">
            <button
              className="mt-6 cursor-pointer rounded-lg bg-gray-100 px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-200"
            >
              Browse Files
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
