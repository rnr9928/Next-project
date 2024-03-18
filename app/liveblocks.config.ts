import { LiveList, LiveObject, createClient } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";

const client = createClient({
authEndpoint: "/api/liveblocks-auth",
throttle: 100,
});


type Presence = {

};

export type Col = {
  name: string,
  id: string,
  index: number,
}

type Storage = {
  cols: LiveList<LiveObject<Col>>,
  cards: LiveList<LiveObject<Card>>,
};

export type Card = {
  name: string,
  id: string,
  index: number,
  colId: string,
}

export const {
  RoomProvider,
  useMyPresence,
  useStorage,
  useMutation,
  useRoom,
  useSelf,
  useOther,

  /* ...all the other hooks you’re using... */
} = createRoomContext<
  Presence,
  Storage
  /* UserMeta, RoomEvent, ThreadMetadata */
>(client);