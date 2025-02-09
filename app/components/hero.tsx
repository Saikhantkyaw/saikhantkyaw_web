import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Sai Khant Kyaw</h1>
        <p className="text-xl text-gray-600 mb-8">Crafting Words That Captivate and Convert</p>
        <Button asChild>
          <a href="#contact">Get in Touch</a>
        </Button>
      </div>
    </section>
  )
}

