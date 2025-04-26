import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
// import { useDispatch } from "react-redux";
// import { openModal } from "../../redux/modalSlice";
import DocumentCard from "./DocumentCard";
import NoData from "../templates/NoData";
import Loading from "../templates/Loading";
import { useFiles } from "../../hooks/useFiles";
import Error from "../templates/Error";

const ListOfFile = () => {
  const { files, loading, error, handleDelete } = useFiles();

  const confirmDelete = (id: number) => {
    handleDelete(id);
  };

  console.log("Erreur : ", error);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        PDF uploaded
      </Typography>

      {files === undefined || files.length === 0 ? (
        <NoData />
      ) : (
        <List>
          {files.map((file) => (
            <DocumentCard
              key={file.id}
              label={file.file_name}
              onDelete={() => confirmDelete(file.id)}
            />
          ))}
        </List>
      )}
    </>
  );
};

export default ListOfFile;
