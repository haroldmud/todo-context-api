import List from "./components/List"
import ProvideList from "./feature/listContext"

export default function Home() {

  return (
    <ProvideList>
      <List/>
    </ProvideList>
  )
}