//this class contains code used to launch the homepage
//and create a new user account

import LoginPage from '../pages/login.page';
import SearchPage from '../pages/search.page';
import LibraryPage from '../pages/library.page';
const expect = require("chai").expect;

//below user account details partly hard coded for this exercise
//ideally will be replaced with data source containing sanitised test user data sources
let randomUsername = Math.random().toString(36).substring(5);
const username1=randomUsername+'@gmail.com';
const password1='Mendeley1234';
const givenname1='Jack';
const familyname1='Ross';
const academicStatus='Professor';
const disciplineStatus='Engineering';
const searchKeyword='crispr';


describe('Testing Creation of a new User Account', () => {
    it('Homepage should have the right title', () => {
        LoginPage.open();
        LoginPage.pause(1000);
        console.log("BROWSER PAGE TITLE : "+browser.getTitle());
        expect(browser.getTitle()).to.equal('Mendeley - Reference Management Software & Researcher Network');
    })

    it('Click Accept cookies action', () => {
        LoginPage.cookieButton.click();
        LoginPage.pause(1000);
    })

    it('Verify Create account', () => {
        LoginPage.createAccount.click();
        console.log("BROWSER PAGE TITLE : "+browser.getTitle());
        expect(browser.getTitle()).to.equal('Welcome');
        expect(browser.getUrl()).to.have.contains('id.elsevier.com');
        browser.pause(1000);
    })

    it('Enter New Account Email ID and sign-up details',()=>{
        LoginPage.userEmailID.setValue(username1);
        LoginPage.Continue.click();
        LoginPage.userGivenName.setValue(givenname1);
        LoginPage.userFamilyName.setValue(familyname1);
        LoginPage.userPassword.setValue(password1);
        LoginPage.userRememberMe.click();
        LoginPage.Continue.click();
        browser.pause(1000);

        console.log("ACCOUNT Creation Confirmation Text : "+LoginPage.accountConfirmText.getText());
        //var confirmText=LoginPage.accountConfirmText.getText();
        expect(LoginPage.accountConfirmText.getText()).to.contain('You now have an Elsevier account.');
        LoginPage.Continue.click();
        browser.pause(1000);

        //setting value for 'current role' - id="academic_status" - choosing option value of 'Professor'
        LoginPage.userAcademicStatus.selectByVisibleText(academicStatus);

        //setting value for 'field of study' - id="discipline_status" - choosing option value of 'Engineering'
        LoginPage.userDisciplineStatus.selectByVisibleText(disciplineStatus);
        
        //untick checkbox for 'Make profile public'
        LoginPage.userPublicLabel.click();
        browser.pause(1000);

        //clicking on 'Continue to Mendeley'
        LoginPage.Continue2.click();
        browser.pause(1000);
        
        //verify if search page is launched and page title is correct
        expect(browser.getUrl()).to.have.contains('https://www.mendeley.com/search/');
        expect(browser.getTitle()).to.equal('Search | Mendeley');
        browser.pause(1000);

    })

})


describe('Testing Signing Out of a User Account', () => {
    it('User Account Signed out from the Profile Option', () => {
        //click on the Profile button
        SearchPage.profileButton.click();
        browser.pause(1000);
        //click on Signout link
        SearchPage.signoutButton.click();
        browser.pause(1000);

        //verify if homepage is launched and page title is correct
        expect(browser.getUrl()).to.have.contains('https://www.mendeley.com/?interaction_required=true');
        expect(browser.getTitle()).to.equal('Mendeley - Reference Management Software & Researcher Network');
        browser.pause(1000);
    })
})

describe('Testing Signing Into a User Account', () => {
    it('User Account Signed IN from the Home page', () => {
        LoginPage.signinLink.click();
        LoginPage.signinEmail.setValue(username1);
        LoginPage.signinButton.click();
        LoginPage.signinPassword.setValue(password1);
        LoginPage.signinButton.click();

        //verify if search page is launched and page title is correct
        expect(browser.getUrl()).to.have.contains('https://www.mendeley.com/search/');
        expect(browser.getTitle()).to.equal('Search | Mendeley');
        browser.pause(1000);
    })

})

describe('Testing Library functions', () => {
    it('Search and add a document to library', () => {
        SearchPage.searchTextBar.setValue(searchKeyword);
        SearchPage.searchButton.click();

        //adding desired result in result list to Library
        LibraryPage.desiredResult.click();
        LibraryPage.addToLibrary.click();

        // get the session id of the current browser window
        var parentGUID = browser.getWindowHandle();

        LibraryPage.viewInLibrary.click();
        browser.pause(1000);

        // get the All the session id of the browsers
        var allGUID = browser.getWindowHandles();
        
        // print the title of the pages
		console.log("Page title before Switching : "+ browser.getTitle());
		console.log("Total Windows : "+allGUID.length);
		// iterate the values in the set
		for(var i = 0; i< allGUID.length;i++){
			// one enter into if blobk if the GUID is not equal to parent window's GUID
			if(allGUID[i] != parentGUID){
				// switch to the guid
				browser.switchToWindow(allGUID[i]);
				// break the loop
				break;
			}
		}

        //verify if Library page is launched and page title is correct
        expect(browser.getUrl()).to.have.contains('https://www.mendeley.com/reference-manager/library/all-references');
        expect(browser.getTitle()).to.equal('Mendeley Reference Manager');
        browser.pause(3000);

    })

})