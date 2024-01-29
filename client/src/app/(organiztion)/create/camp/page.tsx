import { CreateCampContextProvider } from "../../../../components/organization/create/camp/CreateCampContext";
import CreateCampFormContainer from "../../../../components/organization/create/camp/CreateCampFormContainer";
import { Navbar } from "../../../../components/shared/navigation/Navbar";

export default function CreateCamp() {
  return (
    <CreateCampContextProvider>
      <Navbar includeBorderBottom />
      <CreateCampFormContainer />
    </CreateCampContextProvider>
  );
}
