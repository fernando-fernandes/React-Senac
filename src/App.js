import React, {useState, useEffect} from 'react';
import './app.css'

function App(){

  const [aluno, setAluno] = useState({});

  useEffect(() => {

    populaAluno();

    function populaAluno(){
      setAluno({
        nome: 'Fernando',
        usuario: 'fer',
        email: 'fernando.85@outlook.com'
      });
    }
  }, []);

  function handleCadastrar(e){
    e.preventDefault();
    console.log(aluno);
  }

  return(
    <>
      <form className="formulario" onSubmit={handleCadastrar}>

        <h3>Cadastro de aluno</h3>

        <div className="row">
          <span>Nome</span>
          <input type="text"
            // rest operators


          onChange={(e) => setAluno({...aluno, nome: e.target.value})} />
        </div>

        <div className="row">
          <span>Usuário</span>
          <input type="text" onChange={(e) => setAluno({...aluno, usuario: e.target.value})} />
        </div>

        <div className="row">
          <span>E-mail</span>
          <input type="text" onChange={(e) => setAluno({...aluno, email: e.target.value})} />
        </div>

        <div className="row">
          <button onClick={handleCadastrar}>Cadastrar</button>
        </div>
      </form>
    </>
  )
  
}
export default App;