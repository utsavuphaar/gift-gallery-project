import { useLocation } from "react-router-dom"

export default function ViewMore(){
    const {state} = useLocation();
    console.log(state)
    return<>
    <h3>view more</h3>
    <section className="p3" style={{width:'100%',height:'70vh',border:'2px solid'}}>
        <div id="view-left"> 
            
        </div>
        
        <div id="view-mid">
            
        </div>
        
        <div id="view-right">
            
        </div>
    </section>
    </>
}