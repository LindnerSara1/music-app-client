import React, { useState } from "react";
import { BackButton } from "../../components/backButton/BackButton";
import { Genre } from "../../interfaces/Genre";
import { SongModel } from "../../interfaces/SongModel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { Button, Select, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export const AddSong: React.FC<{ addSong: Function }> = (props) => {
  const [song, setSong] = useState<SongModel>({
    title: "",
    artist: "",
    genre: "",
    length: 0,
    price: 0,
  });
  const addNewSong = () => {
    props.addSong(song);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    addNewSong();
    
  };

  return (
    <>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <label id="h1"> ADD NEW SONG </label>
        <TextField
          id="title"
          label="title"
          onChange={(e) => {
            setSong({ ...song, title: e.target.value });
          }}
          variant="outlined"
        />
        <TextField
          id="artist"
          label="artist"
          onChange={(e) => {
            setSong({ ...song, artist: e.target.value });
          }}
          variant="outlined"
        />
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="genre-label">genre</InputLabel>
          <Select
            labelId="genre-lable"
            id="genre"
            value={Genre}
            label="genre"
            onChange={(e: any) => {
              setSong({ ...song, genre: e.target.value });
            }}
          >
            <MenuItem value={"ROCK"}>ROCK</MenuItem>
            <MenuItem value={"POP"}>POP</MenuItem>
            <MenuItem value={"RAP"}>RAP</MenuItem>
            <MenuItem value={"CLASSICAL"}>CLASSICAL</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="length"
          label="length"
          type="number"
          aria-valuemin={0}
          onChange={(e) => {
            setSong({ ...song, length: parseInt(e.target.value) });
          }}
          variant="outlined"
        />
        <TextField
          id="price"
          label="price"
          type="number"
          aria-valuemin={0}
          onChange={(e) => {
            setSong({ ...song, price: parseInt(e.target.value) });
          }}
          variant="outlined"
        />
        <Button
          type={"submit"}
          onClick={handleSubmit}
          variant="contained"
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </Stack>
      <BackButton />
    </>
  );
};
