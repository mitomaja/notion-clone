"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { PlusCircle } from "lucide-react";
import Image from "next/image";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

const DocumentsPage = () => {
  const { user } = useUser();
  const create = useMutation(api.documents.create);
  const onCreate = () => {
    const promise = create({ title: "Untitled" });
    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "New note created!",
      error: "Failed to create a new note.",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-full space-y-4">
      <Image
        src="/empty.png"
        width={300}
        height={300}
        alt="Empty"
        className="dark:hidden "
      />
      <Image
        src="/empty-dark.png"
        width={300}
        height={300}
        alt="Empty-Dark"
        className="hidden dark:block"
      />
      {(user?.firstName && (
        <h2 className="text-lg font-medium">
          Welcome to {user.firstName}&apos;s Jotion
        </h2>
      )) || <h2 className="text-lg font-medium">Welcome to Jotion</h2>}
      <Button onClick={onCreate}>
        <PlusCircle className="h-4 w-4 mr-2" />
        Create a note
      </Button>
    </div>
  );
};
export default DocumentsPage;
