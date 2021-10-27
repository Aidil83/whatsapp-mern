export interface IMessages {
  roomName: string;
  nameColor?: string;
  isDisplay: boolean;
  name: string;
  message: string;
  received: boolean;
  updatedAt: Date;
  __v?: number;
  _id: string;
}

export interface IContact {
  _id: string;
  name: string;
  image?: string | Blob;
  about?: string;
  email?: string;
  phone?: string;
}
