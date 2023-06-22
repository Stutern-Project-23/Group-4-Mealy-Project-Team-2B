import axios from "axios";
import { useNavigate } from "react-router-dom";

const signOut = async () => {
  const history = useNavigate();
    try {
      const response = await axios.post(
        "https:/https://mealy.onrender.com/api/v1/user/logout",
        {
          'headers': {
            'Authorization': 'Bearer <token>'
          }
        }
      );
      
      alert("signed out successfully!");
      history("/landing-page");
      return response;
    } catch (err) {
      return new Error(err.message);
    }
  };

  export default signOut;