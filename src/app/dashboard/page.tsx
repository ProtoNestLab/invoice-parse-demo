import { FileDropzone } from "@/app/dashboard/_components/file-dropzone";
import { UploadHeader } from "@/app/dashboard/_components/upload-header";
import { UploadProgress } from "@/app/dashboard/_components/upload-progress";

export default function DashboardPage() {
  return (
    <main className="flex flex-col items-center p-6 lg:p-24">
      <div className="flex w-full max-w-5xl flex-col items-center">
        <UploadHeader />
        <FileDropzone />
        <UploadProgress />
      </div>
    </main>
  );
}
