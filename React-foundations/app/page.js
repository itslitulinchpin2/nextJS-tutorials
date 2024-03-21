import LikeButton from './like-button.js'

    //imperative JS Code 
    //const app = document.getElementById('app');
    // const header = document.createElement('h1');
    // const text = 'Develop. Preview. Ship';
    // const headerContent = document.createTextNode(text);
    // header.appendChild(headerContent);
    // app.appendChild(header);

    //declarative React Code
    //const domNode = document.getElementById('app');
    //const root = ReactDOM.createRoot(domNode);
    //root.render(<h1>Develop. Preview. Ship.</h1>);  

    
    function Header({title}){
        //console.log(title);
        return (<h1>{title?title:'Default Title'}</h1>)
    }

    export default function HomePage(){
        const names = ['Decision to leave', 'The handmaiden', 'Thirst']
    
        return(
            <div>
                <Header title = "Park Chan-wook"/>
                <ul>
                    {names.map((name)=>
                            (
                            <li key = {name}>
                                {name}
                            </li>
                        )
                    )}
                </ul>
                <LikeButton/>
            </div>);
    }


