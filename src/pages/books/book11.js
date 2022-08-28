import Comp from "./Comp"
import { useAuth } from "../../contexts/AuthContext.js";
export default function Book11() {
  var loggedIn;
  const { currentUser, logout } = useAuth()
  if (currentUser != null){
    loggedIn = true;
  } else {
    loggedIn = false;
  }
  return (
  <>
    {loggedIn && <Comp title="Thinking Fast and Slow" Afile="Limitless___Jim_Kwik.pdf" cover="https://images-na.ssl-images-amazon.com/images/I/61fdrEuPJwL.jpg"/>}
    {!loggedIn && <Comp title="Thinking Fast and Slow" Afile="upgradeForFullAccess.pdf" cover="https://images-na.ssl-images-amazon.com/images/I/61fdrEuPJwL.jpg"/>}
  </>
  )
}
