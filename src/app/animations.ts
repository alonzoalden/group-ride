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
			style({ background: '#e3e3e4', opacity: '0.7', transition: 'all 120ms ease-in-out' }),
			query(':enter, :leave', [
				style({
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
				})
			], {optional: true}),
			query(':enter', [
				style({
					left: '100%',
				})
			], {optional: true}),
			query(':leave',  animateChild(), {optional: true}),
			group([
				query(':leave', [
					animate('300ms ease-out', style({ left: '100%' }))
				], {optional: true}),
				query(':enter', [
					animate('300ms ease-out', style({ left: '0%' }))
				], {optional: true})
			]),
			query(':enter', animateChild(), {optional: true}),
		]),
		// transition('* <=> FilterPage', [
		// 	style({ position: 'relative' }),
		// 	query(':enter, :leave', [
		// 		style({
		// 			position: 'absolute',
		// 			top: 0,
		// 			left: 0,
		// 			width: '100%'
		// 		})
		// 	]),
		// 	query(':enter', [
		// 		style({ left: '-100%' })
		// 	]),
		// 	query(':leave', animateChild()),
		// 	group([
		// 		query(':leave', [
		// 			animate('200ms ease-out', style({ left: '100%' }))
		// 		]),
		// 		query(':enter', [
		// 			animate('300ms ease-out', style({ left: '0%' }))
		// 		])
		// 	]),
		// 	query(':enter', animateChild()),
		// ])
	]);

export const fadeInOut =
	trigger('fadeInOut', [
		state('void => *', style({
		  opacity: 0
		})),
		transition('* <=> *', animate('1000ms ease-in-out')),
	])