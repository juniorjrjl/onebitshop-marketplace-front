import { useContext } from "react";
import { AuthContext} from "../contexts/authContex";

export default function(){
    const authContexData = useContext(AuthContext);

    return authContexData
}
