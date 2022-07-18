import { BackButton } from "../../components/backButton/BackButton";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { Button, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SongModel } from "../../interfaces/SongModel";

export const EditSong:React.FC<{idSongToEdit: Function ,songToEdit: Function}> = (props) => {  
  const [song, setSong] = useState<SongModel>({
    title: '',
    artist: '',
    genre: '',
    length: 0,
    price: 0
  });
  const params = useParams();
  const displaySongToEdit = async () =>{
    const songFromApp = (await props.idSongToEdit(params.id)) as SongModel;
    setSong(songFromApp);
  }
  
  const handleSubmit  = (e: any)  => {
    e.preventDefault();
    props.songToEdit(song);
  };
  
  const handleChangeGenre = (event: SelectChangeEvent) =>{
    setSong({...song,genre: event.target.value })
  }
  useEffect(()=>{
    displaySongToEdit();
  },[])
  return (
    <>
      <h4>edit song</h4>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <label id="h1"> EDIT SONG </label>
        <TextField
          id="title"
          label="title"
          onChange={(e) => {
            setSong({ ...song, title: e.target.value });
          }}
          value={song.title}
          variant="outlined"
        />
        <TextField
          id="artist"
          label="artist"
          onChange={(e) => {
            setSong({ ...song, artist: e.target.value });
          }}
          value={song.artist}
          variant="outlined"
        />

        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="genre-label">genre</InputLabel>
          <Select
            labelId="genre-lable"
            id="genre"
            label="genre"
            type="string"
            onChange={ handleChangeGenre }
            value={song.genre}
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
          onChange={(e) => {
            setSong({ ...song, length: parseInt(e.target.value) });
          }}
          value={song.length}
          variant="outlined"
        />
        <TextField
          id="price"
          label="price"
          type="number"
          onChange={(e) => {
            setSong({ ...song, price: parseInt(e.target.value) });
          }}
          value={song.price}
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