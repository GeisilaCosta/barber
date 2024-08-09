import { Button } from "./_components/ui/button"
import { Card, CardContent } from "./_components/ui/card"
import Image from "next/image"

const Home = () => {
  return (
    <Card>
      <CardContent>
        <Image alt="FSW Barber" src="/logo.png" />
      </CardContent>
    </Card>
  )
}

export default Home