import {Injectable} from '@angular/core';

@Injectable()
export class UtilsService {

    // This method is used to for the overflow correction from the Mat Side Nav Panel. -alonzo
    public overflow(val: boolean) {
        let sideView = document.getElementsByClassName('ride-list')[0];
        let leaderContainer = document.getElementsByClassName('leader-container')[0];

        // This fixes side affects where the Y-scroll is set to 0 (top of the div),
        var pxFromTop = leaderContainer.getBoundingClientRect().top+window.scrollY - 50 ;

        if (val) {
            sideView.classList.add("overflow-visible");

            // auto scrolling to top is prevented by setting a
            // negative top margin to the actively scrolled Y distance.
            (leaderContainer as HTMLElement).style.marginTop = pxFromTop + 'px';
            return;
        } 
        else {
            sideView.classList.remove("overflow-visible");
            (leaderContainer as HTMLElement).style.marginTop = 0 + 'px';
            return;
        }
    }
}