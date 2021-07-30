
import { trigger, animate, transition, style } from '@angular/animations';

// fade In effect
export const fadeInAnimation = trigger('fadeInAnimation', [
    transition(':enter', [
        style({ opacity: 0 }),
        animate('.3s', style({ opacity: 1 }))
    ]),
]);

