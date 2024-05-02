const Aside = () => {
    return <aside>
        <main class="container">
          <div class="row">
            <h1>Revisa nuestros servicios!</h1>
          </div>
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
                <label class="form-check-label"><input type="checkbox"></input> Recuerdamelo</label>
              </div>
              <button type="submit" class="btn btn-primary">Iniciar Sesion</button>
            </form>
        </main>
    </aside>;
}

export default Aside;