
import { trigger, animate, transition, style, state } from '@angular/animations';

// fade In effect
export const slideOutAnimation = trigger('slideOutAnimation', [
    state(
        '*',
        style({
            position: 'fixed',
            top: '200px',
            left: '100px',
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.3)'
        })
    ),
    transition(':enter', [
        style({ 
            right: '-500%',
            backgroundColor: 'rgba(0, 0, 0)'
        }),
        animate('.5s ease-in-out', style({
            right: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.3)'
        }))
    ]),
    transition(':leave', [
        animate('.5s ease-in-out', style({ 
            right: '-500%',
            backgroundColor: 'rgba(0, 0, 0, 0)'
        }))
    ]),
]);

