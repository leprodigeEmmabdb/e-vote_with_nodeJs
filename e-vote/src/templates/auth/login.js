function Login(){
    return (
        <>
        <div className="row container my-5 m-auto">
          
        <div className="col-lg-6 ">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste mollitia id quibusdam, nihil natus illo voluptas, perspiciatis pariatur cum, neque corporis consequuntur omnis consectetur impedit deleniti provident dolore temporibus velit!</p>
           <div className="form-group">
               <div className="form-group">
                    <label htmlFor="email" className="col-lg-5">Email</label>
                    <input type="email" name="email" id="email" className="col-lg-8 form-control"/>
               </div>
               <div className="form-group">
                    <label htmlFor="email" className="col-lg-5">Mot de passe</label>
                    <input type="password" name="email" id="email" className="col-lg-8 form-control"/>
               </div>
               <div className="form-group">
                   <div className="col">
                         <input type="checkbox" name="cnd1" id="" className="mx-2" />
                         <label htmlFor="cnd1" > J'ai lu et j'accepte les Termes & conditions</label>
                   </div>
                    <div className="col">
                         <input type="checkbox" name="cnd2" id="" className="mx-2"/>
                         <label htmlFor="cnd2"> J'accepte de recevoir la newsletter de e-vote</label>
                    </div>
               </div>
               <div className="col">
                    <button type="submit" className="btn btn-primary rounded-pill col-lg-10 p-3">Créer un compte</button>
               </div>
           </div>
           <div className="border-top p-3 mt-4"></div>
           <div className="container logiManner">
               <div className="rounded-pill col-lg-10 bg-light p-3 m-3">
                    <i className="fas fa-google"></i>
                    Se connecter avec Google
               </div>
               <div className="rounded-pill col-lg-10 bg-light p-3">
                    <i className="fas fa-linkdin"></i>
                    Se connecter avec Linkdin
               </div>
           </div>
        </div>
        <div className="col-lg-6 bg-success ">

        </div>
        </div>
        
        </>
    );

}
export default Login;