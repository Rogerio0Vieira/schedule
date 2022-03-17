import "./styles.css"

export function NavBar({children}){
  return(
    <div className="nav">
      <div className="column-50">
       <h1>CONTACTS</h1>
      </div>
      <div ClassName="column-50">
       {children}
      </div>
      
    </div>
  )
}