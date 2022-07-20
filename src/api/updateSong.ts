import axios from "axios";
import { SONGSֹ_URL } from "../config";
import { SongModel } from "../interfaces/SongModel";

export const updateSong = async (
  song: SongModel
): Promise<SongModel[] | string> => {
  try {
    const { data, status } = await axios.put<SongModel[]>(
      `${SONGSֹ_URL}/update`,
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
