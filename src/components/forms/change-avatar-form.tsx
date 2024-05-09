"use client";
import { toast } from "sonner";
import useSession from "../hooks/use-session";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { FileUploader } from "react-drag-drop-files";
import {
  VKCreateAlbumResponse,
  VKGetAlbumsResponse,
  VKGetUploadServerReponse,
} from "@/types";

export default function ChangeAvatarForm() {
  const session = useSession();
  return (
    <Avatar className="w-32 h-32 sm:w-64 sm:h-64 shadow-avatar">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <div className="absolute h-12 flex justify-center items-center w-full backdrop-blur-md bottom-0">
        <FileUploader
          types={["jpg", "png", "gif"]}
          handleChange={(file: File) => {
            if (!session) {
              toast.error("Требуется авторизация.");
            }
            const formData = new FormData();
            formData.append("file1", file);
            VK.Api.call(
              "photos.getAlbums",
              { owner_id: session?.mid, v: "5.81" },
              (r: VKGetAlbumsResponse) => {
                console.log(r);
                const albums = r.response;
                if (!albums) {
                  toast.error("Ошибка при получении альбома.");
                  return;
                }

                const albumId = albums.items.find(
                  (item) => item.title === "Соты"
                )?.id;

                if (albumId) {
                  VK.Api.call(
                    "photos.getUploadServer",
                    {
                      album_id: albumId,
                      v: "5.81",
                    },
                    async (r: VKGetUploadServerReponse) => {
                      const response = r.response;
                      if (!response) {
                        toast.error("Ошибка при загрузке файла.");
                        return;
                      }
                      const res = await fetch(response.upload_url, {
                        method: "POST",
                        body: formData,
                      });
                      console.log(res);
                    }
                  );
                  return;
                }
                VK.Api.call(
                  "photos.createAlbum",
                  {
                    title: "Соты",
                    privacy_view: ["all"],
                    v: "5.81",
                  },
                  (r: VKCreateAlbumResponse) => {
                    const createdAlbumId = r.response?.id;
                    if (!createdAlbumId) {
                      toast.error("Ошибка при создании альбома.");
                      return;
                    }
                    VK.Api.call(
                      "photos.getUploadServer",
                      {
                        album_id: createdAlbumId,
                        v: "5.81",
                      },
                      async (r: VKGetUploadServerReponse) => {
                        const response = r.response;
                        if (!response) {
                          toast.error("Ошибка при загрузке файла.");
                          return;
                        }
                        const res = await fetch(response.upload_url, {
                          method: "POST",
                          body: formData,
                        });
                        console.log(res);
                      }
                    );
                  }
                );
              }
            );
          }}
        >
          <span className="text-primary-foreground text-sm font-light cursor-pointer hover:underline">
            Изменить
          </span>
        </FileUploader>
        {/* <span className="text-primary-foreground text-sm font-light cursor-pointer hover:underline">
          Изменить
        </span> */}
      </div>
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
