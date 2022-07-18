import axios from "axios";
import { SongModel } from "../interfaces/SongModel";
const localhost = "http://localhost:8080/Songs";

export const addNewSong = async (
  song: SongModel
): Promise<SongModel[] | string> => {
  try {
    const { data, status } = await axios.post<SongModel[]>(
      `${localhost}/add`,
      song,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    console.log(JSON.stringify(data, null, 4));
    console.log("response status is: ", status);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
};
export const updateSong = async (
  song: SongModel
): Promise<SongModel[] | string> => {
  try {
    const { data, status } = await axios.put<SongModel[]>(
      `${localhost}/update`,
      song,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    console.log(JSON.stringify(data, null, 4));
    console.log("response status is: ", status);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
};
export const getAllSongs = async (): Promise<SongModel[] | string> => {
  try {
    const { data, status } = await axios.get<SongModel[]>(`${localhost}`, {
      headers: {
        Accept: "application/json",
      },
    });
    console.log(JSON.stringify(data, null, 4));
    console.log("response status is: ", status);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
};
export const getAllSongsOfSpecificArtist = async (
  artist: string
): Promise<SongModel[] | string> => {
  try {
    const { data, status } = await axios.get<SongModel[]>(
      `${localhost}/artist/${artist}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    console.log(JSON.stringify(data, null, 4));
    console.log("response status is: ", status);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
};
export const getSongById = async (
  id: string
): Promise<SongModel[] | string> => {
  try {
    const { data, status } = await axios.get<SongModel[]>(
      `${localhost}/${id}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    console.log(JSON.stringify(data, null, 4));
    console.log("response status is: ", status);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
};
export const deleteSongById = async (
  id: string
): Promise<SongModel[] | string> => {
  try {
    const { data, status } = await axios.delete<SongModel[]>(
      `${localhost}/delete/${id}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    console.log(JSON.stringify(data, null, 4));
    console.log("response status is: ", status);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
};
