import { BackButton } from "../../components/backButton/BackButton";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { Button, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SongModel } from "../../interfaces/SongModel";
import { useFormik } from "formik";
import * as Yup from "yup";

export const EditSong: React.FC<{
  idSongToEdit: Function;
  songToEdit: Function;
  navigateTo: string;
}> = (props) => {
  const [song, setSong] = useState<SongModel>({
    title: "",
    artist: "",
    genre: "",
    length: 0,
    price: 0,
  });
  const params = useParams();
  const displaySongToEdit = async () => {
    const songFromApp = (await props.idSongToEdit(params.id)) as SongModel;
    setSong(songFromApp);
  };
  useEffect(() => {
    displaySongToEdit();
  }, []);
  const initialValues: SongModel = song;
  const validationSchema = Yup.object({
    title: Yup.string()
      .max(25, "must be 25 characters or less")
      .required("Required"),
    artist: Yup.string()
      .max(20, "must be 20 characters or less")
      .required("Required"),
    genre: Yup.string()
      .oneOf(["ROCK", "POP", "RAP", "CLASSICAL"], "Invalid Genre Type")
      .required("Required"),
    length: Yup.number()
      .min(2, "length should be of minimum 2 ")
      .required("Required"),
    price: Yup.number()
      .min(2, "price should be of minimum 2$ ")
      .required("Required"),
  });
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      props.songToEdit(formik.values);
      alert(JSON.stringify(values, null, 2));
    },
  });
  const genreTypes = ["ROCK", "POP", "RAP", "CLASSICAL"];
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
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
            type="text"
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />
          <TextField
            id="artist"
            label="artist"
            type="text"
            value={formik.values.artist}
            onChange={formik.handleChange}
            error={formik.touched.artist && Boolean(formik.errors.artist)}
            helperText={formik.touched.artist && formik.errors.artist}
          />
          <TextField
            sx={{
              m: 1,
              minWidth: 220,
              backgroundColor: "white",
              borderRadius: 2,
              margin: 2,
            }}
            id="genre"
            name="genre"
            label="genre"
            type="text"
            select
            value={formik.values.genre}
            defaultValue=""
            onChange={formik.handleChange}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          >
            {genreTypes.map((option: string, index: number) => (
              <MenuItem key={option + index} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="length"
            label="length"
            type="number"
            value={formik.values.length}
            onChange={formik.handleChange}
            error={formik.touched.length && Boolean(formik.errors.length)}
            helperText={formik.touched.length && formik.errors.length}
          />
          <TextField
            id="price"
            label="price"
            type="number"
            value={formik.values.price}
            onChange={formik.handleChange}
            error={formik.touched.price && Boolean(formik.errors.price)}
            helperText={formik.touched.price && formik.errors.price}
          />
          <Button type={"submit"} variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </Stack>
      </form>
      <BackButton />
    </>
  );
};
