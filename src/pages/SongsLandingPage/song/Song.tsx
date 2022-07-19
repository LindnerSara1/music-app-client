import { TableCell, IconButton } from "@mui/material";
import { SongModel } from "../../../interfaces/SongModel";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { useNavigate } from "react-router-dom";

export const Song: React.FC<{
  song: SongModel;
  i: number;
  deleteSongProp: Function;
}> = (props) => {
  const navigate = useNavigate();

  const deleteSong = (id: string) => {
    props.deleteSongProp(id);
  };
  return (
    <>
      <TableCell align="center">{props.song.title}</TableCell>
      <TableCell align="center">{props.song.artist}</TableCell>
      <TableCell align="center">{props.song.price} $</TableCell>
      <TableCell align="center">
        <IconButton
          aria-label="edit"
          onClick={() => navigate(`/Songs/edit/${props.song.id}`)}
        >
          <BorderColorIcon />
        </IconButton>
      </TableCell>
      <TableCell align="center">
        <IconButton
          aria-label="delete"
          onClick={() => deleteSong(props.song.id as string)}
        >
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </>
  );
};
