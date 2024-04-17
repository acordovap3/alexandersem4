const Main = () => {
    return <main>
        <form>
              <div class="form-group">
                <label for="inputEmail">Correo</label>
                <input type="email" class="form-control" id="inputEmail" placeholder="Correo"></input>
              </div>
              <div class="form-group">
                <label for="inputPassword">Contrasena</label>
                <input type="password" class="form-control" id="inputPassword" placeholder="Contrasena"></input>
              </div>
              <div class="form-group">
                <label class="form-check-label"><input type="checkbox"> Recuerdamelo</label>
              </div>
              <button type="submit" class="btn btn-primary">Iniciar Sesion</button>
            </form>
    </main>;
}

export default Main;