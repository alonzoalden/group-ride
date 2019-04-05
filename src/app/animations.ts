import {
	trigger,
	query,
	style,
	animate,
	transition,
	animateChild,
	group,
	state
} from '@angular/animations';

export const slideInAnimation =
	trigger('routeAnimations', [
		transition('* <=> *', [
			style({ background: '#e3e3e4', opacity: '1', transition: 'all 120ms ease-in-out' }),
			query(':enter, :leave', [
				style({
					position: 'absolute',
					top: 0,
					left: 0,
					bottom: 0,
					width: '100%',
					opacity: '1',
					transition: 'all 100ms ease-in-out'
				})
			], {optional: true}),
			query(':enter', [
				style({
					left: '-100%',
					opacity: '1',
					transition: 'all 100ms ease-in-out'
				})
			], {optional: true}),
			query(':leave',  animateChild(), {optional: true}),
			group([
				query(':leave', [
					animate('300ms ease-out', style({ left: '-100%' }))
				], {optional: true}),
				query(':enter', [
					animate('300ms ease-out', style({ left: '0%' }))
				], {optional: true})
			]),
			query(':enter', animateChild(), {optional: true}),
		])
	]);

export const fadeInOut =
	trigger('fadeInOut', [
		state('void => *', style({
		  opacity: 0
		})),
		transition('* <=> *', animate('1000ms ease-in-out')),
	])