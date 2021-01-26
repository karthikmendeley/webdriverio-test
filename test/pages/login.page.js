import Page from './page';

class LoginPage extends Page {
    open(){
        super.open('/');
    }

    pause(duration){
        super.pause(duration);
    }

    get cookieButton()
    {
        return $('#onetrust-accept-btn-handler'); 
    }

    get createAccount()
    {
        return $('=Create account');
    }

    get userEmailID()
    {
        return $('#bdd-email');
    }

    get userGivenName()
    {
        return $('#bdd-givenName');
    }
    get userFamilyName()
    {
        return $('#bdd-familyName');
    }
    get userPassword()
    {
        return $('#bdd-password');
    }
    get userRememberMe()
    {
        return $('#rememberMe');
    }
    get Continue()
    {
        return $('#bdd-elsPrimaryBtn');
    }

    get Continue2()
    {
        return $('button=Continue to Mendeley');
    }

    get accountConfirmText()
    {
        return $('[class="els-h2-txt"]');
    }

    get userAcademicStatus()
    {
        return $('#academic_status');
    }   

    get userDisciplineStatus()
    {
        return $('#discipline_status');
    }   

    get userPublicLabel()
    {
        return $('#usePublicLabel');
    }   

    get signinLink()
    {
        return $('=Sign In');
    }

    get signinEmail()
    {
        return $('#bdd-email');
    }

    get signinPassword()
    {
        return $('#bdd-password');
    }

    get signinButton()
    {
        return $('#bdd-elsPrimaryBtn');
    }
        
}

export default new LoginPage();