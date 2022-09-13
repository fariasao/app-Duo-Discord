interface ButtonProps {
  title: string
}

function Button(props: ButtonProps) {
  return (
    <button>
      Enviar
    </button>
  )
}

function App() {
  return (
    <>
      <Button title="Enviar 1"/>
      <Button title="Enviar 2"/>
      <Button title="Enviar 3"/>
    </>
  )
}

export default App
