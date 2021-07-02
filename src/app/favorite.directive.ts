import { Directive, HostBinding } from  '@angular/core';

@Directive({
    selector: '[mwFavorite]'
})

export class favoriteDirective {
    @HostBinding('class.is-favorite') isFavorite = true;
}
