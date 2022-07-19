import { Link, useNavigate } from "react-router-dom";
import { Button, Table, TextField } from "@mui/material";
import { TableHead, TableRow, TableBody, TableContainer } from "@mui/material/";
import Paper from "@mui/material/Paper";
import { StyledTableCell } from "./SongLandingPage.style";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { SongModel } from "../../interfaces/SongModel";
import { Song } from "./song/Song";
import { useState } from "react";

const SongLandingPage: React.FC<{
  addSong: Function;
  songsList: SongModel[];
  deleteSong: Function;
  searchByArtist: Function;
}> = (props) => {
  const deleteSongProp = (id: string) => {
    props.deleteSong(id);
  };
  const navigate = useNavigate();
  const [artist, setArtist] = useState("");
  const arrSongModel = ["title", "artist", "genre", "length", "price"];
  return (
    <>
      <h1>The Songs Shop</h1>
      <TextField
        id="search"
        label="enter artist name"
        name="search"
        variant="outlined"
        onChange={(e) => setArtist(e.target.value)}
      />
      <Button
        onClick={() => {
          props.searchByArtist(artist);
        }}
        variant="outlined"
        size="large"
      >
        search
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 1000 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {arrSongModel.map((song, i) => (
                <StyledTableCell key={i} align="center">
                  {song}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.songsList.map((song, i) => (
              <TableRow
                key={i}
              >
                <Song song={song} i={i} deleteSongProp={deleteSongProp} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AddCircleIcon
        onClick={() => {
          navigate("/Songs/new");
        }}
      />
    </>
  );
};
export default SongLandingPage;
