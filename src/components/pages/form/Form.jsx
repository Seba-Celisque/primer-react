import { useState } from "react";

const Form = () => {
  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
  });

  const handleSubmit = (evento) => {
    evento.preventDefault();

    if (userData.name.length < 2) {
      console.log("El nombre no puede ser menor a 2");
      return;
    }

    let data = {
      nombreUsuario: userData.name,
      apellidoUsuario: userData.lastName,
    };

    console.log(data);
  };

  const handleChange = (evento) => {
    setUserData({ ...userData, [evento.target.name]: evento.target.value });
  };

  return (
    <div>
      <h2>Este es el formulario</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese su nombre aqui"
          name="name"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Ingrese su apellido aqui"
          name="lastName"
          onChange={handleChange}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
