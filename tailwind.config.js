module.exports = {
	content: [
		'./app/views/**/*.html.erb',
		'./app/helpers/**/*.rb',
		'./app/assets/stylesheets/**/*.css',
		'./app/javascript/**/*.js',
	],
	theme: {
		screens: {
			'sm': '640px',
      		'md': '1070px',
      		'lg': '1215px',
      		'xl': '1280px',
      		'2xl': '1536px',
		},
		extend: {
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif'],
			},
		},
	},
};
