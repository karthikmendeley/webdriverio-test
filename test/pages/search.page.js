import Page from './page';

class SearchPage extends Page {
    open(){
        super.open('/search');
    }

get searchTextBar()
{
    return $('[class="TextInput__StyledTextInput-sc-17tc2y0-1 bsjsOP md-text-input"]'); //search text bar
}

get searchButton()
{
    return $('[class="Button__StyledButton-f7t7mc-0 dPxeZS md-button qe-search-button"]'); //search text button
}

get profileButton()
{
    return $('[class="profile-section-link with-dropdown"]');
}

get signoutButton()
{
    return $('=Sign Out');
}



}

export default new SearchPage();