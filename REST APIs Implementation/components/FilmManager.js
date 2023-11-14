class FilmManager{    
    constructor() {
        this.films = "/api/films/";
        this.privateFilms = "/api/films/private/";
        this.publicFilms = "/api/films/public/";
        this.invitedPublicFilms = "/api/films/public/invited";
        this.reviewAssignments = "/api/films/public/assignments";
        this.users = "/api/users/";
        this.usersAuthenticator = "/api/users/authenticator";
    }
}

module.exports = FilmManager;


