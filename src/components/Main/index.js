import "./styles.css"

export function Main({children}){
  return(
    <main className="main">
      <div>
      {children}
      </div>
    </main>
  );
}