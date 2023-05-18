module.exports = {
	content: [
		'./app/views/**/*.html.erb',
		'./app/helpers/**/*.rb',
		'./app/assets/stylesheets/**/*.css',
		'./app/javascript/**/*.js',
	],
	theme: {
		screens: {
			'xsm': '600px',
			'sm': '800px',
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
