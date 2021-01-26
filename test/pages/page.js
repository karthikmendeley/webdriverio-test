export default class Page {

    open(path){
        browser.url(path);
    }

    pause(duration){
        browser.pause(duration);
    }
}