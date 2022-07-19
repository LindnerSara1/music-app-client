import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import {
  addNewSong,
  deleteSongById,
  updateSong,
  getAllSongsOfSpecificArtist,
  getAllSongs,
} from "../../api/songs.api";
import { SongModel } from "../../interfaces/SongModel";
import { AddSong } from "../addSong/AddSong";
import { EditSong } from "../editSong/EditSong";
import SongLandingPage from "../SongsLandingPage/SongLandingPage";

export const ParentCopmonent: React.FC<{}> = () => {
  const songs: { songsArr: SongModel[] } = {
    songsArr: [
      {
        id: "",
        title: "",
        artist: "",
        genre: "",
        price: 0,
        length: 0,
      },
    ],
  };
  const [songsList, setSongsList] = useState(songs.songsArr);
  const addSong = async (song: SongModel) => {
    try {
      await addNewSong(song);
      setSongsList([...songsList, song]);
      alert("The song was successfully added");
    } catch (error: any) {
      console.error(error);
    }
  };
  const deleteSong = async (id: string) => {
    try {
      await deleteSongById(id);
      const s = songsList.filter((song) => song.id !== id);
      setSongsList([...s]);
    } catch (error: any) {
      console.error(error);
    }
  };
  const idSongToEdit = (id?: string) => {
    return songsList.find((s: SongModel) => s.id === id);
  };

  const songToEdit = async (song: SongModel) => {
    try {
      await updateSong(song);
      const index = songsList.findIndex((s) => s.id === song.id);
      const copySong = [...songsList];
      copySong[index] = song;
      setSongsList([...copySong]);
      alert("The song has been successfully updated");
    } catch (error: any) {
      console.error(error);
    }
  };
  const initSongs = async () => {
    try {
      const res = (await getAllSongs()) as SongModel[];
      setSongsList(res);
      return res;
    } catch (error: any) {
      console.error(error);
    }
  };
  const searchByArtist = async (artist: string) => {
    if (artist === "") {
      initSongs();
    } else {
      try {
        const res = (await getAllSongsOfSpecificArtist(artist)) as SongModel[];
        setSongsList(res);
        return res;
      } catch (error: any) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    initSongs();
  }, []);
  return (
    <Routes>
      <Route
        path="/Songs"
        element={
          <SongLandingPage
            addSong={addSong}
            songsList={songsList}
            deleteSong={deleteSong}
            searchByArtist={searchByArtist}
          />
        }
      ></Route>
      <Route path="/Songs/new" element={<AddSong addSong={addSong} navigateTo={window.location.href}/>}></Route>
      <Route
        path="/Songs/edit/:id"
        element={
          <EditSong idSongToEdit={idSongToEdit} songToEdit={songToEdit} navigateTo={window.location.href}/>
        }
      ></Route>
    </Routes>
  );
};
