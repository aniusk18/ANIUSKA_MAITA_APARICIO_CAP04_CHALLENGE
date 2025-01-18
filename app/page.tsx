import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { FeatureItem } from "@/components/feature-item"
import { MonitorSmartphone, BookOpen, Users, BadgeCheck } from 'lucide-react'

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container py-12 md:py-24">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                  Comienza o acelera tu carrera en tecnología
                </h1>
                <p className="text-xl text-muted-foreground">
                  Estudia Desarrollo Full Stack, Data Science o Data Analytics.
                </p>
              </div>
              
              <div className="space-y-4">
                <FeatureItem 
                  icon={<MonitorSmartphone />}
                  text="Online, en vivo y flexible"
                />
                <FeatureItem 
                  icon={<BookOpen />}
                  text="Basado en proyectos"
                />
                <FeatureItem 
                  icon={<Users />}
                  text="Basado en cohortes"
                />
                <FeatureItem 
                  icon={<BadgeCheck />}
                  text="Garantía de Empleo"
                />
              </div>

              <Button className="bg-yellow-400 text-black hover:bg-yellow-500 px-8 py-6 text-lg">
                Aplicar
              </Button>
            </div>

            <div className="relative h-[600px] hidden lg:block">
              <Image
                src={`https://hebbkx1anhila5yf.public.blob.vercel-storage.com/landing-reference-HtMHvFnjpreq0PPTUjPfbm7XPMTzrh.png`}
                alt="Student working at desk"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </section>

        <section className="container py-24 text-center">
          <h2 className="text-3xl font-bold">
            Bootcamp <span className="text-purple-600">#1</span> de Latam
          </h2>
        </section>
      </main>
    </div>
  )
}

