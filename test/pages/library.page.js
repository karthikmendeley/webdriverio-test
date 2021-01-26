import Page from './page';

class LibraryPage extends Page {
    open(){
        super.open('/search');
    }

get profileButton()
{
    return $('[class="profile-section-link with-dropdown"]');
}

get signoutButton()
{
    return $('=Sign Out');
}

get desiredResult()
{
    return $('span=Delivering crispr: A review of the challenges and approaches');
}

get addToLibrary()
{
    return $('[class="md-icon-plus"]');
}

get viewInLibrary()
{
    return $('div=View in library');
}

}

export default new LibraryPage();