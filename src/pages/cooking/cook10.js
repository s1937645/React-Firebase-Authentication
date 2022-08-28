import Comp from "./Comp"
import { useAuth } from "../../contexts/AuthContext.js";
export default function Cook10() {
  var loggedIn;
  const { currentUser, logout } = useAuth()
  if (currentUser != null){
    loggedIn = true;
  } else {
    loggedIn = false;
  }
  return (
  <>
    {loggedIn && <Comp title="Protein Ice Cream" Afile="2___CSS_Fundamentals.pdf"/>}
    {!loggedIn && <Comp title="Detox Smoothy" Afile="u.pdf"/>}
  </>
  )
}
