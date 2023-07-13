import { useNavigate } from "react-router-dom";
import { login, loginWithGoogle, register } from "../../../firebaseConfig";

const FirebaseAuth = () => {
  const navigate = useNavigate();

  let infoInput = {
    email: "escribetumail@gmail.com",
    password: "abcdefg",
  };

  const handleSubmit = async () => {
    let res = await login(infoInput);
    console.log(res);
    navigate("/");
  };

  let infoForRegister = {
    email: "escribetumail@gmail.com",
    password: "abcdefg",
  };

  const registerWithEmail = async () => {
    let res = await register(infoForRegister);
    console.log(res);
  };

  const handleSubmitGoogle = async () => {
    let res = await loginWithGoogle();
    console.log(res);
  };

  return (
    <div>
      <h1>Estoy en el login</h1>

      <button onClick={handleSubmit}>Ingresar</button>

      <h4>Aun no tienes cuenta?</h4>

      <button onClick={registerWithEmail}>Registrate</button>

      <h4>Ingresar con google</h4>
      <button onClick={handleSubmitGoogle}>Ingresar con google</button>
    </div>
  );
};

export default FirebaseAuth;
