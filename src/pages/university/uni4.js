import Comp from "./Comp"
import { useAuth } from "../../contexts/AuthContext.js";
export default function Uni4() {
  var loggedIn;
  const { currentUser, logout } = useAuth()
  if (currentUser != null){
    loggedIn = true;
  } else {
    loggedIn = false;
  }
  return (
  <>
    {loggedIn && <Comp title="ILP" Afile="Limitless___Jim_Kwik.pdf" cover="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Book.svg/1200px-Book.svg.png"/>}
    {!loggedIn && <Comp title="ILP" Afile="u.pdf" cover="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Book.svg/1200px-Book.svg.png"/>}
  </>
  )
}
