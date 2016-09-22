//Code React element here

const Interests =  
   	React.createElement('ul', {className: "me_interests"},
   		[ 
   			React.createElement("li", {}, "JavaScript"),
   			React.createElement("li", {}, "React"),
   			React.createElement("li", {}, "Movies"),
   			React.createElement("li", {}, "Ice cream"),
   		]
   	);

const Tagline = React.createElement('p', {}, "Who is learning React");

const Title = React.createElement('h1', {}, "An Awesome Person");

const meInReact =	React.createElement('div', {className: "me"}, [Title, Tagline, Interests]);

		ReactDOM.render(meInReact, document.getElementById("main"))
   