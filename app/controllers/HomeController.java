package controllers;

import play.mvc.*;
import views.html.*;

public class HomeController extends Controller {
    public Result startGame() {
        return ok(gameView.render());
    }

    public Result statsPage(){
        return ok(statsView.render());
    }

}
