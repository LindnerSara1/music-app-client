import { Link } from "react-router-dom";
import { Button, Table, TextField } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { StyledTableCell } from "./SongLandingPage.style";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { SongModel } from "../../interfaces/SongModel";
import { Song } from "../../components/song/Song";
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
  const [artist, setArtist] = useState("");
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
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">title</StyledTableCell>
              <StyledTableCell align="center">artist</StyledTableCell>
              <StyledTableCell align="center">price</StyledTableCell>
              <StyledTableCell align="center">EDIT</StyledTableCell>
              <StyledTableCell align="center">DELETE</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.songsList.map((song, i) => (
              <Song song={song} i={i} deleteSongProp={deleteSongProp} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Link to="/Songs/new">
        <AddCircleIcon />
      </Link>
    </>
  );
};
export default SongLandingPage;
