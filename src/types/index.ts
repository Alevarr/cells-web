export type VKSession = {
  expire: number;
  mid: string;
  secret: string;
  sid: string;
  sig: string;
};

export type VKAlbum = {
  id: number;
  title: string;
};

export type VKError = {
  error_msg: string;
};

export type VKGetAlbumsResponse = {
  response?: { count: number; items: VKAlbum[] };
  error?: VKError;
};

export type VKCreateAlbumResponse = {
  response?: VKAlbum;
  error?: VKError;
};

export type VKGetUploadServerReponse = {
  response?: { album_id: number; upload_url: string; user_id: number };
  error?: VKError;
};
